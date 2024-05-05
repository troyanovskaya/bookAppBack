const express = require('express')
const commentRouter = express.Router();

const { postComment} = require('../controllers/commentController')

commentRouter.route('/').post(postComment);

module.exports = commentRouter;