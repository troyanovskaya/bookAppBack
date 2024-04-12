const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);

const seriesSchema=mongoose.Schema({
    _id: {
      type: Schema.Types.ObjectId,
      required:true},
    series_name:{
      type:String,
      required:true
    }
  });
  
  const Series = mongoose.model('series', seriesSchema);
  module.exports={
      Series
  }