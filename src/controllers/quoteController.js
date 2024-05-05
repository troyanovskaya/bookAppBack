
const {Quote} = require('../schemas/Quote')
const mongoose=require('mongoose');

const postQuote = async (req, res) => {
    try{
        let _id = new mongoose.Types.ObjectId();
        let {quote_book,  quote_book_img, quote_book_name, quote_book_authors, 
            quote_user, quote_user_img, quote_user_login, quote_text, 
            quote_date, quote_character } = req.body;
        const newQuote = await new Quote({_id, quote_book,  quote_book_img, 
            quote_book_name, quote_book_authors, quote_user, quote_user_img, 
            quote_user_login, quote_text, quote_date, quote_character});
        newQuote.save();
        res.status(200).send(newQuote);
    }catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const getQuoteByBookId = async (req, res) =>{
    try{
        let bookId = req.params.bookId;
        const quotes = await Quote.find({quote_book: bookId});
        res.status(200).send(quotes);
    } catch (e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}

module.exports = { 
    postQuote,
    getQuoteByBookId
}