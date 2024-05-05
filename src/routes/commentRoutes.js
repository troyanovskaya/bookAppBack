const express = require('express')
const commentRouter = express.Router();

const { postComment, getCommentByBookId} = require('../controllers/commentController')

commentRouter.route('/').post(postComment);
commentRouter.route('/books/:bookId').get(getCommentByBookId);

module.exports = commentRouter;