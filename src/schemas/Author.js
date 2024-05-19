const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);



const authorSchema=mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required:true},
    author_name:{
      type:String,
      required:true
    },
    author_biography:[{
      type:String,
      required:true
    }],
    author_date_of_birth:{
      type:String,
      required:false
    },
    author_books: [{
      type: mongoose.Schema.Types.ObjectId, ref: 'books'
    }],
    author_img: {
        type:String,
        required:false
    },
    author_series: [{
        type:String
      }],
    
  });
  
  const Author = mongoose.model('Author', authorSchema);
  module.exports={
      Author
  }