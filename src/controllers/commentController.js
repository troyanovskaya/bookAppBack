const {User} = require('../schemas/User');
const {Book} = require('../schemas/Book');
const {Comment} = require('../schemas/Comment')
const asyncErrorHandler = require('./asyncErrorHandler');
const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');

const postComment = asyncErrorHandler(async (req, res) => {
    let _id = new mongoose.Types.ObjectId();
    let {comment_book,  comment_book_img, comment_book_name, comment_book_authors, 
        comment_user, comment_user_img, comment_user_login, comment_text, 
        comment_date } = req.body;
    const newComment = await new Comment({_id, comment_book,  comment_book_img, 
        comment_book_name, comment_book_authors, comment_user, comment_user_img,
        comment_user_login, comment_text, comment_date});
    newComment.save();
    res.status(201).send(newComment);
})
const getCommentByBookId = asyncErrorHandler(async (req, res) =>{
    let bookId = req.params.bookId;
    const comments = await Comment.find({comment_book: bookId});
    res.status(200).send(comments);
})
const deleteComment = asyncErrorHandler(async(req, res) =>{
    let comm = await Comment.findByIdAndDelete(req.params.id);
    res.status(204).send(comm);  
})
const patchComment = asyncErrorHandler(async (req, res) =>{
    let update = req.body;
    let comm = await Comment.findOneAndUpdate({_id: req.params.id}, update, {new: true, runValidators: true});
    res.status(200).send(comm);   
})

module.exports = { 
    postComment,
    getCommentByBookId,
    deleteComment,
    patchComment
}