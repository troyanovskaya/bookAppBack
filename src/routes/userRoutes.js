const express = require('express')
const userRouter = express.Router();

const { getUserByToken, getAllUsers, deleteAllUsers, postUser, getUserByEmailPassword, checkBodyPostUser,
    patchUser, getFavDrop, forgotPassword,
    passwordReset } = require('../controllers/userController')

//bookRouter.route('/').get(getBooks).post(checkBookPostBody, postBook);
//bookRouter.route('/:id').get(getBook).patch(patchBook).delete(deleteBook);
userRouter.route('/').post(checkBodyPostUser, postUser).get(getUserByEmailPassword);
userRouter.route('/token').get(getUserByToken);
userRouter.route('/all').get(getAllUsers).delete(deleteAllUsers);
userRouter.route('/forgotPassword').post(forgotPassword);
userRouter.route('/passwordReset/:token').patch(passwordReset);
userRouter.route('/:id').patch(patchUser);
userRouter.route('/:userId/:score').get(getFavDrop);



module.exports = userRouter;