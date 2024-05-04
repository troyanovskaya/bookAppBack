const express = require('express')
const userRouter = express.Router();

const { postUser, getUserByEmailPassword, checkBodyPostUser,
    patchUser } = require('../controllers/userController')

//bookRouter.route('/').get(getBooks).post(checkBookPostBody, postBook);
//bookRouter.route('/:id').get(getBook).patch(patchBook).delete(deleteBook);
userRouter.route('/').post(checkBodyPostUser, postUser).get(getUserByEmailPassword);
userRouter.route('/:id').patch(patchUser);

module.exports = userRouter;