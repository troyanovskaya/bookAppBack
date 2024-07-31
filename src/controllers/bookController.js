const {Book} = require('../schemas/Book');
const mongoose = require('mongoose');
const {BookFeatures} = require('../utils/bookUtils');
const asyncErrorHandler = require('./asyncErrorHandler');

const getBooks = asyncErrorHandler(async (req, res) => {
    const books = await Book.find();
    res.status(200).send(books); 
})

const postBook = asyncErrorHandler(async (req, res) => {
    let _id = new mongoose.Types.ObjectId();
    let {book_name, book_authors, book_edition_year, book_description,
    book_keywords, book_genres, book_rates, book_average_rate, book_img, book_series, book_series_numbers} = req.body;
    const newBook = await new Book({_id, book_name, book_authors, book_edition_year, book_description,
        book_keywords, book_genres, book_rates, book_average_rate, book_img, book_series, book_series_numbers});
    newBook.save();
    res.status(201).send(newBook);
})
const getBook = asyncErrorHandler(async (req, res) =>{
    const book = await Book.findById(req.params.id);
    if(book){
        res.status(200).send(book);
    } else{
        res.status(404).send('No book found');
    }
})
const patchBook = asyncErrorHandler(async (req, res) =>{
    let update = req.body;
    let book = await Book.findOneAndUpdate({_id: req.params.id}, update, {new: true, runValidators: true});
    res.status(200).send(book);  
})
const deleteBook = asyncErrorHandler(async(req, res) =>{
    let book = await Book.findByIdAndDelete(req.params.id);
    res.status(204).send(book);
})
const checkBookPostBody = async(req, res, next) =>{
    let {book_name, book_authors, book_edition_year, book_description,
        book_keywords, book_genres, book_rates, book_average_rate, book_img, book_series, book_series_numbers} = req.body

    if (!book_name || !book_authors || !book_edition_year || !book_description ||
        !book_keywords || !book_genres || !book_rates || !book_average_rate || 
         !book_img || !book_series || !book_series_numbers){
        
        return res.status(404).send({ "message": "proper post body missing"});
    }
    next();
}
const patchBookArray = asyncErrorHandler(async (req, res) =>{
        let book = await Book.findById(req.params.id);
        let property = req.params.property;
        let newElement = req.body;
        if(book[`${property}`] && newElement){
            book[`${property}`].push(newElement);
            book.save();
            res.status(200).send(book);
        } else{
            res.status(404).send("Property undefined");
        }  
})

const findBooks = asyncErrorHandler(async(req, res) =>{
    let searchResult = await new BookFeatures(Book.find(), req.query).filter();
    res.status(200).send(await searchResult.query); 
})



module.exports = {
    getBooks,
    postBook,
    getBook,
    patchBook,
    deleteBook,
    checkBookPostBody,
    patchBookArray,
    findBooks
}