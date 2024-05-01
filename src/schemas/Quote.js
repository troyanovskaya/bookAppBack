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
    quote_user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    },
    quote_text:[{
        type:String,
        required:true
    }],

    quote_label: {
        type:String,
        required:true
    }
  });
  
  const Quote = mongoose.model('quotes', quoteSchema);
  module.exports = {
    Quote
  }