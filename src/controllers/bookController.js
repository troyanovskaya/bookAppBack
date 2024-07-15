const {Book} = require('../schemas/Book');
const mongoose = require('mongoose');
const {BookFeatures} = require('../utils/bookUtils');
const getBooks = async (req, res) => {
    try{
        const books = await Book.find();
        // for (let book of books){
        //     book.book_average_rate = 0;
        //     book.save()
        // }
        res.status(200).send(books);
    }catch(e){
        res.status(500).send({ "message": "internal server error" });
    }    
}
const postBook = async (req, res) => {
   try{
        let _id = new mongoose.Types.ObjectId();
        let {book_name, book_authors, book_edition_year, book_description,
        book_keywords, book_genres, book_rates, book_average_rate, book_img, book_series, book_series_numbers} = req.body;
        const newBook = await new Book({_id, book_name, book_authors, book_edition_year, book_description,
            book_keywords, book_genres, book_rates, book_average_rate, book_img, book_series, book_series_numbers});
        newBook.save();
        res.status(201).send(newBook);
    }catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const getBook = async (req, res) =>{
    try{
        const book = await Book.findById(req.params.id);
        if(book){
            res.status(200).send(book);
        } else{
            res.status(404).send('No book found');
        }
        
    } catch(e){
        res.status(500).send({ "message": "'No books found by the id provided", "e": e });
    }
}
const patchBook = async (req, res) =>{
    try{
        let update = req.body;
        let book = await Book.findOneAndUpdate({_id: req.params.id}, update, {new: true, runValidators: true});
        console.log(4);
        res.status(200).send(book);
    } catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }    
}
const deleteBook = async(req, res) =>{
    try{
        let book = await Book.findByIdAndDelete(req.params.id);
        res.status(204).send(book);
    } catch (e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }    
}
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
const patchBookArray = async (req, res) =>{
    try{
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
        // let update = req.body;
        // book = await Book.findOneAndUpdate({_id: book._id}, update, {new: true});
        // console.log(4);
        // res.status(200).send(book);
    } catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }    
}

const findBooks = async(req, res) =>{
    console.log('!!!')
    let searchResult = await new BookFeatures(Book.find(), req.query).filter();
    res.status(200).send(await searchResult.query); 
}



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