const express = require('express')
const userRouter = express.Router();

const { postUser, getUserByLoginEmail } = require('../controllers/userController')

//bookRouter.route('/').get(getBooks).post(checkBookPostBody, postBook);
//bookRouter.route('/:id').get(getBook).patch(patchBook).delete(deleteBook);
userRouter.route('/').post(postUser).get(getUserByLoginEmail);

module.exports = userRouter;