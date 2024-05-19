const { Book } = require('../schemas/Book');
const {Rate} = require('../schemas/Rate')
const mongoose=require('mongoose');

const getScore = async (rate_book) => {
    let rates = await Rate.find({'rate_book': rate_book});
    
    let sum = 0;
    for (let rate of rates){
        sum = sum + rate.rate_score;
    }
    return(sum/rates.length).toFixed(2);    
}
const postRate = async (req, res) => {
    try{
        let _id = new mongoose.Types.ObjectId();
        let {rate_user, rate_book, rate_score} = req.body;
        let oldRate = await Rate.findOne({'rate_user': rate_user, 'rate_book': rate_book});
        if(oldRate){
            oldRate.rate_score = rate_score;
            oldRate.save().then( async () =>{
                let result = await getScore(rate_book);
                let book = await Book.findOne({_id: rate_book._id});
                book.book_average_rate = result;
                book.save()
                res.status(200).send(result)
            }  );
        } else{
            const newRate = await new Rate({_id, rate_book, rate_user, rate_score});
            newRate.save().then( async () =>{
                let result = await getScore(rate_book);
                let book = await Book.findOne({_id: rate_book._id});
                book.book_average_rate = result;
                book.save()
                res.status(200).send(result)
            }  );
        }

    }catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const getRateByBookId = async (req, res) =>{
    try{
        let bookId = req.params.bookId;
        let result = await getScore(bookId);
        res.status(200).send(result);
    } catch (e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const getRateByUserId = async (req, res) =>{
    try{
        let userId = req.params.userId;
        let rates = await Rate.find({'rate_user': userId});
        res.status(200).send(rates);
    } catch (e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}


module.exports = { 
    postRate,
    getRateByBookId,
    getRateByUserId
}