const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);

const bookSchema=mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true},
    book_name:{
        type:String,
        required:[true, "book_name is required field"]
    },
    book_authors: {
        type:[String]
    },
    book_edition_year:{
        type: Number,
        required:[true, "book_edition_year is required field"]
    },
    book_description:{
        type: [String]
    },
    book_keywords:{
        type: [String]
    },
    book_genres: {
        type:[String]
    },
    book_average_rate:{
        type: Number,
        required:true,
        default: 0
    },
    book_img:{
        type: [String]
    },
    book_series: {
        type:[String]
    },
    book_series_numbers: {
        type: [Number]
    }
  });
  
  const Book=mongoose.model('books', bookSchema);
  module.exports={
      Book
  }