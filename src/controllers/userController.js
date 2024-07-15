const {User} = require('../schemas/User');

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
const postUser = async (req, res) => {
    try{
        let _id = new mongoose.Types.ObjectId();
        let {user_role, user_login, user_password,
            user_email, user_img, user_books_saved, user_books_read,
            user_books_dropped, user_books_favourite, user_saved_quotes, user_books_recommendations} = req.body;
        console.log('!')
            const newUser = await new User({_id, user_role, user_login, user_password,
            user_email, user_img, user_books_saved, user_books_read,
            user_books_dropped, user_books_favourite, user_saved_quotes, user_books_recommendations});
        newUser.save();
        res.status(201).send(newUser);
    }catch(e){
       res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const getUserByEmailPassword = async (req, res) => {
    try{
        let {password, email} = req.query;
        const user = await User.findOne({"user_email": email});
        console.log(user);
        if(!user){
            res.status(404).send("No user found"); 
        } else if (user.user_password!=password){
            res.status(404).send('Wrong password'); 
        } else{
            res.status(200).send(user); 
        }
        
    } catch (e) {
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const patchUser = async (req, res) =>{
    try{
        let update = req.body;
        let user = await User.findOneAndUpdate({_id: req.params.id}, update, {new: true, runValidators: true});
        res.status(200).send(user);
    } catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }    
}
const getFavDrop = async (req, res) => {
    // let id = await req.params.userId;
    // console.log(id)
    let u = await User.findById(req.params.userId);
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

}


module.exports = { 
    postUser,
    getUserByEmailPassword,
    checkBodyPostUser,
    patchUser,
    getFavDrop
}