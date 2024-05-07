const express = require('express')
const rateRouter = express.Router();

const { postRate, getRateByBookId} = require('../controllers/rateController')

rateRouter.route('/').post(postRate);
rateRouter.route('/books/:bookId').get(getRateByBookId);

module.exports = rateRouter;