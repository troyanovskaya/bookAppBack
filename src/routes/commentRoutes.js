const express = require('express')
const commentRouter = express.Router();

const { postComment, getCommentByBookId, deleteComment,
    patchComment} = require('../controllers/commentController')

commentRouter.route('/').post(postComment);
commentRouter.route('/:id').delete(deleteComment).patch(patchComment);
commentRouter.route('/books/:bookId').get(getCommentByBookId);

module.exports = commentRouter;