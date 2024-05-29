
const {Review} = require('../schemas/Review')
const mongoose=require('mongoose');

const postReview = async (req, res) => {
    try{
        let _id = new mongoose.Types.ObjectId();
        let {review_book,  review_book_img, review_book_name, review_book_authors, 
            review_user, review_user_img, review_user_login, review_text, 
            review_date } = req.body;
        const newReview = await new Review({_id, review_book,  review_book_img, 
            review_book_name, review_book_authors, review_user, review_user_img, 
            review_user_login, review_text, review_date});
        newReview.save();
        res.status(200).send(newReview);
    }catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const getReviewByBookId = async (req, res) =>{
    try{
        let bookId = req.params.bookId;
        const reviews = await Review.find({review_book: bookId});
        res.status(200).send(reviews);
    } catch (e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const deleteReview = async(req, res) =>{
    try{
        let review = await Review.findByIdAndDelete(req.params.id);
        res.status(200).send(review);
    } catch (e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }    
}

module.exports = { 
    postReview,
    getReviewByBookId,
    deleteReview
}