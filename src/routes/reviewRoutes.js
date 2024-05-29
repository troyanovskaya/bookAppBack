const express = require('express')
const reviewRouter = express.Router();

const { postReview, getReviewByBookId, deleteReview} = require('../controllers/reviewController')

reviewRouter.route('/').post(postReview);
reviewRouter.route('/:id').delete(deleteReview);
reviewRouter.route('/books/:bookId').get(getReviewByBookId);

module.exports = reviewRouter;