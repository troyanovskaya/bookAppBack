const express = require('express')
const authorRouter = express.Router();

const { postAuthor, getAuthorByName } = require('../controllers/authorController')

authorRouter.route('/').post(postAuthor);
authorRouter.route('/:name').get(getAuthorByName);

module.exports = authorRouter;