const express = require('express')
const quoteRouter = express.Router();

const { postQuote, getQuoteByBookId, deleteQuote} = require('../controllers/quoteController')

quoteRouter.route('/').post(postQuote);
quoteRouter.route('/:id').delete(deleteQuote);
quoteRouter.route('/books/:bookId').get(getQuoteByBookId);

module.exports = quoteRouter;