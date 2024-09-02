const {User} = require('../schemas/User');
const asyncErrorHandler = require('./asyncErrorHandler');
const sendEmail = require('../utils/email');
const CustomError = require('../utils/customError');
const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const util = require('util');
mongoose.connect(url);
const issueToken = id =>{
    return jwt.sign({id}, 'mkgkK-=Q13mkv_dge_8*ad<', {expiresIn: "10d"});
}
const getUserByToken = asyncErrorHandler(async (req, res, next) =>{
    const testToken = req.headers.authorization;
    let token;
    if(testToken && testToken.startsWith('Bearer')){
        token = testToken.split(' ')[1];
    }
    if(!token){
        return next(new CustomError("User is not authorized", 401))
    }
    const decodedToken = await util.promisify(jwt.verify)(token, 'mkgkK-=Q13mkv_dge_8*ad<');
    let user  = await User.findById(decodedToken.id);
    if(!user){
        return next(new CustomError("The user with given token do not exist", 401));
    }
    if(await user.isPasswordChanged(decodedToken.iat)){
        return next(new CustomError("Password has changed scince token was issued", 401))
    }
    res.status(200).send(user);
})
const getAllUsers = asyncErrorHandler(async (req, res, next) => {
    const users = await User.find();
    res.status(200).send(users); 
})
const deleteAllUsers = asyncErrorHandler(async (req, res, next) => {
    const usersDeleted = await User.deleteMany();
    res.status(200).send({usersDeleted}); 
})
const checkBodyPostUser = async (req, res, next) => {
    let {user_login, user_password, user_email} = req.body;
    if(user_login && user_password && user_email){
        return next();
    }
    return res.status(404).send({ "message": "proper post body missing"});
}
const postUser = asyncErrorHandler(async (req, res, next) => {
    let _id = new mongoose.Types.ObjectId();
    let {user_role, user_login, user_password,
        user_email, user_img, user_books_saved, user_books_read,
        user_books_dropped, user_books_favourite, user_saved_quotes, user_books_recommendations} = req.body;
    const newUser = await new User({_id, user_role, user_login, user_password,
        user_email, user_img, user_books_saved, user_books_read,
        user_books_dropped, user_books_favourite, user_saved_quotes, user_books_recommendations});
    const token = issueToken(_id);
    newUser.save()
        //.then(()=> res.status(201).send(newUser))
                .then(()=> res.status(201).json({user: newUser, token}))
        .catch( err => next(err));
})
const getUserByEmailPassword = asyncErrorHandler(async (req, res, next) => {
    let {password, email} = req.query;
    const user = await User.findOne({"user_email": email}).select('+user_password');
    if(!user || !await user.comparePasswords(password, user.user_password)){
        const err = new CustomError("Wrong login or password", 404);
        return next(err);
    } else{
        const token = issueToken(user._id);
        res.status(200).json({user, token}); 
    }
})
const patchUser = (async (req, res, next) =>{
    let update = req.body;
    let user = await User.findOneAndUpdate({_id: req.params.id}, update, {new: true, runValidators: true});
    if(!user){
        const err = new CustomError("No user found!", 404);
        return next(err);
    }
    res.status(200).send(user);  
})
const getFavDrop = asyncErrorHandler(async (req, res, next) => {
    let u = await User.findById(req.params.userId);
    if(!u){
        const err = new CustomError("No user found!", 404);
        return next(err);
    }
    let dropped = u.user_books_dropped;
    let favourite = u.user_books_favourite;
    let dropA;
    let favA;
    let dropS = new Set();
    let favS = new Set();
    const users = await User.find();
    const chosenUsers = [];
    for (let user of users){
        let s = 0;
        for(let d of user.user_books_dropped){
            if(dropped.includes(d)){
                s++;
            }
        }
        for(let f of user.user_books_favourite){
            if(favourite.includes(f)){
                s++;
            }
        } 
        if(s > req.params.score ||  s == req.params.score){
            chosenUsers.push(user)
        }
    }
    for (let user of chosenUsers){
        for (let d of user.user_books_dropped){
            if(!dropped.includes(d)){
                dropS.add(d);
            }
            if(favourite.includes(d)){
                dropS.delete(d);
                favS.delete(d);
            }
        }
        for (let f of user.user_books_favourite){
            if(!favourite.includes(f)){
                favS.add(f);
            }
            if(dropped.includes(f)){
                dropS.delete(f);
                favS.delete(f);
            }
        }
    }
    favA = [...favS];
    dropA = [...dropS];
    let obj = {'dropped': dropA, 'favourite': favA}
    res.status(200).send(obj);
})

const forgotPassword = asyncErrorHandler(async (req, res, next) => {
    const user = await User.findOne({user_email: req.body.user_email});
    if(!user){
        return next(new CustomError("We could not find user with this email", 404));
    }
    const resetToken = user.createPasswordResetToken();
    const result = await user.save();
    const resetUrl = `https://booknook-e2178.web.app/users/passwordReset/${resetToken}`;
    const message  = `We received password reset request from your account. Please click on the link to create new password:\n\n ${resetUrl} \n\n This reset link is valid for 10 minutes.`
    try{
        await sendEmail({
            email: user.user_email,
            subject: 'Password reset',
            message: message    
        });
        res.status(200).send({ result: 'Email sent'}); 
    } catch(e){
        user.passwordResetToken = undefined;
        user.passwordResetTokenExpires = undefined;
        user.save({validateBeforeSave: false});
        return next(new CustomError(e.message, 500))
    }

    
})
const passwordReset = asyncErrorHandler(async (req, res, next) => {
    const token = crypto.createHash('sha256').update(req.params.token).digest('hex');
    const user = await User.findOne({
        passwordResetToken: token,
        passwordResetTokenExpires: {$gt: Date.now()}
    })
    if(!user){
        return next(new CustomError('Password reset token is invalid or has expired', 400))
    }
    user.user_password = req.body.user_password;
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;
    user.passwordChangedAt = Date.now();
    user.save();
    const newToken = issueToken(user._id);
    res.status(200).json({user, token:newToken}); 
})



module.exports = { 
    getUserByToken,
    getAllUsers,
    deleteAllUsers,
    postUser,
    getUserByEmailPassword,
    checkBodyPostUser,
    patchUser,
    getFavDrop,
    forgotPassword,
    passwordReset
}