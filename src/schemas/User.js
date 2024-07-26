const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);

const userSchema=mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required:true
    },
    user_role:{
        type: String,
        enum : ['user','admin'],
        default: 'user'
    },
    user_login:{
        type:String,
        required:[true, "user_login is a required field"],
        unique: [true, "user_login should be unique"]
    },
    user_password:{
        type:String,
        required: [true, "user_password is a required field"],
        minLength: [8, "user_password should be at leat 8 characters long"],
        maxLength: [100, "user_password should not be longer than 100"]
        // select: false to exclude from query result
    },
    user_email:{
        type:String,
        required: [true, "user_email is a required field"],
        unique: [true, "user_email should be unique"],
    },
    user_img:{
        type:String,
        required:false,
        default: 'assets/avatars/lotus.png'
    },
    user_books_saved: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'books'
    },
    user_books_read: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'books'
    },
    user_books_dropped: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'books'
    },
    user_books_favourite: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'books'
    },
    user_saved_quotes: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'quotes'
    },  
    user_books_recommendations: {
        type: [mongoose.Schema.Types.ObjectId], 
        ref: 'books',
    }
  });
  
  const User = mongoose.model('users', userSchema);
  module.exports={
      User
  }