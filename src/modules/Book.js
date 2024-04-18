const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);

const bookSchema=mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true},
    book_name:{
        type:String,
        required:true
    },
    book_authors: [{
        type:String,
        required:true
      }],
    book_edition_year:{
        type: Number,
        required:true
    },
    book_description:[{
        type: String,
        required:true
    }],
    book_keywords:[{
        type: String,
        required:true
    }],
    book_genres: [{
        type:String,
        required:true
    }],
    book_rates: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'rates'
    }],
    book_average_rate:{
        type: Number,
        required:true,
        default: 5
    },
    book_quotes: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'quotes'
    }],
    book_comments: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'comments'
    }],
    book_reviews: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'reviews'
    }],
    book_img:[{
        type: String,
        required:true
    }],
    book_reviews: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'series'
    }],

  });
  
  const Book=mongoose.model('books', bookSchema);
  module.exports={
      Book
  }