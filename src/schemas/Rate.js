const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);

const rateSchema=mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required:true},
    rate_book: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'books'
    },
    rate_user: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'users'
    },
    rate_score:[{
        type:Number,
        required:true
    }],
    rate_user: {
        type:String,
        required:true
    }
  });
  
  const Rate = mongoose.model('rates', rateSchema);
  module.exports = {
    Rate
  }