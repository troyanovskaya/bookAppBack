const {User} = require('../schemas/User');
const asyncErrorHandler = require('./asyncErrorHandler');
const CustomError = require('../utils/customError');
const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);
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
    newUser.save()
        .then(()=> res.status(201).send(newUser))
        .catch( err => next(err));
    res.status(201).send(newUser);
})
const getUserByEmailPassword = asyncErrorHandler(async (req, res, next) => {
    let {password, email} = req.query;
    const user = await User.findOne({"user_email": email});
    if(!user){
        const err = new CustomError("No user found", 404);
        return next(err);
    } else if (user.user_password!=password){
        const err = new CustomError("Wrong password", 404);
        return next(err);
    } else{
        res.status(200).send(user); 
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


module.exports = { 
    postUser,
    getUserByEmailPassword,
    checkBodyPostUser,
    patchUser,
    getFavDrop
}