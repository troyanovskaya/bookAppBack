const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);

const cors = require('cors');
const express = require('express')
const app = express();

const port = 3000;
const {Book} = require('./src/modules/Book.js');

const whitelist = ['http://localhost:4200', 'https://troyanovskaya.github.io/bookApp']; // assuming front-end application is running on localhost port 3000

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions));

app.use(cors());
app.use(express.json())

app.get('/books', async (req, res) => {
    try{
        const books = await Book.find();
        res.status(200).send(books);
    }catch(e){
        res.status(500).send({ "message": "internal server error" });
    }
    
});
app.post('/books', async (req, res) => {
    try{
        let _id = new mongoose.Types.ObjectId();
        console.log(req.body)
        let {book_name, book_authors, book_edition_year, book_description,
        book_keywords, book_genres, book_rates, book_average_rate, book_quotes,
        book_comments, book_reviews, book_img, book_series} = req.body
        const newBook = await new Book({_id, book_name, book_authors, book_edition_year, book_description,
            book_keywords, book_genres, book_rates, book_average_rate, book_quotes,
            book_comments, book_reviews, book_img, book_series});
        newBook.save();
        res.status(200).send(newBook);
    }catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
})
app.get('/books/:id', async (req, res) =>{
    try{
        const book = await Book.findById(req.params.id);
        //res.status(200).send(books);
        // console.log(req.params.id)
        // const book = await Book.findbyId(req.params.id, (err, docs) => {
        //     if (err){
        //         console.log(err);
        //     }else{
        //         console.log("Result : ", docs);
        //     }
        // });
        res.status(200).send(book);
    } catch(e){
        res.status(500).send({ "message": "'No books found by the id provided", "e": e });
    }
})
app.listen(port, () =>{
    console.log('server has started');
})

