const express = require('express')
const reviewRouter = express.Router();

const { postReview, getReviewByBookId} = require('../controllers/reviewController')

reviewRouter.route('/').post(postReview);
reviewRouter.route('/books/:bookId').get(getReviewByBookId);

module.exports = reviewRouter;