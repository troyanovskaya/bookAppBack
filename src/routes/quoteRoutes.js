const express = require('express')
const quoteRouter = express.Router();

const { postQuote, getQuoteByBookId} = require('../controllers/quoteController')

quoteRouter.route('/').post(postQuote);
quoteRouter.route('/books/:bookId').get(getQuoteByBookId);

module.exports = quoteRouter;