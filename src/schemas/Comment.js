const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);

const commentSchema=mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required:true},
    comment_book: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'books'
    },
    comment_user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    },
    comment_text:[{
        type:String,
        required:true
    }],
    comment_date: {
        type:String,
        required:true
    }
  });
  
  const Comment = mongoose.model('comments', commentSchema);
  module.exports={
      Comment
  }