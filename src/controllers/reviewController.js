
const {Review} = require('../schemas/Review');
const asyncErrorHandler = require('./asyncErrorHandler');
const CustomError = require('../utils/customError');
const mongoose=require('mongoose');

const postReview = asyncErrorHandler(async (req, res, next) => {
    let _id = new mongoose.Types.ObjectId();
    let {review_book,  review_book_img, review_book_name, review_book_authors, 
        review_user, review_user_img, review_user_login, review_text, 
        review_date } = req.body;
    const newReview = await new Review({_id, review_book,  review_book_img, 
        review_book_name, review_book_authors, review_user, review_user_img, 
        review_user_login, review_text, review_date});
    newReview.save()
        .then(()=> res.status(201).send(newReview))
        .catch( err => next(err));
    res.status(201).send(newReview);
})
const getReviewByBookId = asyncErrorHandler(async (req, res, next) =>{
    let bookId = req.params.bookId;
    const reviews = await Review.find({review_book: bookId});
    res.status(200).send(reviews);
})
const deleteReview = asyncErrorHandler(async(req, res) =>{
    let review = await Review.findByIdAndDelete(req.params.id);
    if(!review){
        const err = new CustomError("No review found!", 404);
        return next(err);
    }
    res.status(204).send(review);
})

module.exports = { 
    postReview,
    getReviewByBookId,
    deleteReview
}