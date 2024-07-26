const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);

const quoteSchema=mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required:true},
  quote_book: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'books'
  },
  quote_book_img:{
      type: [String]
  },
  quote_book_name:{
      type: String
  },
  quote_book_authors:{
      type: [String]
  },
  quote_user: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'users'
  },
  quote_user_img: {
      type: String
  },
  quote_user_login: {
      type: String
  },
  quote_text:{
      type:[String],
      required:[true, "quote_text is a required field"],
      unique:[true, "quote_text should be a unique field"]
  },
  quote_date: {
      type:String,
      required:[true, "quote_date is a required field"],
  },
  quote_character: {
    type:String,
    default: 'Author'
  }

  });
  
  const Quote = mongoose.model('quotes', quoteSchema);
  module.exports = {
    Quote
  }