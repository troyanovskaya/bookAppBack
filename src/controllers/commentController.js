const {User} = require('../schemas/User');
const {Book} = require('../schemas/Book');
const {Comment} = require('../schemas/Comment')
const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');

const postComment = async (req, res) => {
    try{
        let _id = new mongoose.Types.ObjectId();
        let {comment_book,  comment_book_img, comment_book_name, comment_book_authors, 
            comment_user, comment_user_img, comment_user_login, comment_text, 
            comment_date } = req.body;
        const newComment = await new Comment({_id, comment_book,  comment_book_img, 
            comment_book_name, comment_book_authors, comment_user, comment_user_img,
            comment_user_login, comment_text, comment_date});
        newComment.save();
        res.status(200).send(newComment);
    }catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const getCommentByBookId = async (req, res) =>{
    try{
        let bookId = req.params.bookId;
        const comments = await Comment.find({comment_book: bookId});
        res.status(200).send(comments);
    } catch (e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const deleteComment = async(req, res) =>{
    try{
        let comm = await Comment.findByIdAndDelete(req.params.id);
        res.status(200).send(comm);
    } catch (e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }    
}
const patchComment = async (req, res) =>{
    try{
        let update = req.body;
        let comm = await Comment.findOneAndUpdate({_id: req.params.id}, update, {new: true});
        res.status(200).send(comm);
    } catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }    
}

module.exports = { 
    postComment,
    getCommentByBookId,
    deleteComment,
    patchComment
}