const express = require('express')
const rateRouter = express.Router();

const { postRate, getRateByBookId, getRateByUserId} = require('../controllers/rateController')

rateRouter.route('/').post(postRate);
rateRouter.route('/books/:bookId').get(getRateByBookId);
rateRouter.route('/users/:userId').get(getRateByUserId);

module.exports = rateRouter;