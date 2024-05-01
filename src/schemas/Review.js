const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);

const reviewSchema=mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required:true},
    review_book: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'books'
    },
    review_user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    },
    review_text:[{
        type:String,
        required:true
    }],
    review_date: {
        type:String,
        required:true
    }
  });
  
  const Review = mongoose.model('reviews', reviewSchema);
  module.exports={
      Review
  }