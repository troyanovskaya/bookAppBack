const express = require('express')
const userRouter = express.Router();

const { postUser, getUserByEmailPassword, checkBodyPostUser } = require('../controllers/userController')

//bookRouter.route('/').get(getBooks).post(checkBookPostBody, postBook);
//bookRouter.route('/:id').get(getBook).patch(patchBook).delete(deleteBook);
userRouter.route('/').post(checkBodyPostUser, postUser).get(getUserByEmailPassword);

module.exports = userRouter;