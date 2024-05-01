const {User} = require('../schemas/User');
const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);
const postUser = async (req, res) => {
    try{
        //console.log(new mongoose.Types.ObjectId())
        let _id = new mongoose.Types.ObjectId();
        // console.log('123')
        // console.log(_id);
        // let {user_role} = req.body;
        // console.log(user_role);
        let {user_role, user_login, user_password,
            user_email, user_img, user_books_saved, user_books_read,
            user_books_dropped, user_books_favourite, user_saved_quotes, user_books_recommendations} = req.body;
        console.log('!')
            const newUser = await new User({_id, user_role, user_login, user_password,
            user_email, user_img, user_books_saved, user_books_read,
            user_books_dropped, user_books_favourite, user_saved_quotes, user_books_recommendations});
        newUser.save();
        res.status(200).send(newUser);
    }catch(e){
       res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const getUserByLoginEmail = async (req, res) => {
    try{
        let {login, email} = req.query;
        const user = await User.findOne({"user_email": email, "user_login": login})
        if(!user){
            res.status(200).send("No user found"); 
        } else{
            res.status(200).send(user);  
        }
        
    } catch (e) {
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}

module.exports = { 
    postUser,
    getUserByLoginEmail
}