
const {Quote} = require('../schemas/Quote');
const asyncErrorHandler = require('./asyncErrorHandler');
const mongoose=require('mongoose');

const postQuote = asyncErrorHandler(async (req, res) => {
    let _id = new mongoose.Types.ObjectId();
    let {quote_book,  quote_book_img, quote_book_name, quote_book_authors, 
        quote_user, quote_user_img, quote_user_login, quote_text, 
        quote_date, quote_character } = req.body;
    const newQuote = await new Quote({_id, quote_book,  quote_book_img, 
        quote_book_name, quote_book_authors, quote_user, quote_user_img, 
        quote_user_login, quote_text, quote_date, quote_character});
    newQuote.save();
    res.status(201).send(newQuote);
})
const getQuoteByBookId = asyncErrorHandler(async (req, res) =>{
    let bookId = req.params.bookId;
    const quotes = await Quote.find({quote_book: bookId});
    res.status(200).send(quotes);
})
const deleteQuote = asyncErrorHandler(async(req, res) =>{
    let quote = await Quote.findByIdAndDelete(req.params.id);
    res.status(204).send(quote);  
})
module.exports = { 
    postQuote,
    getQuoteByBookId,
    deleteQuote
}