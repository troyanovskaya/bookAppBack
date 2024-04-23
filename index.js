const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);

const cors = require('cors');
const express = require('express')
const app = express();

const port = 3000;
const {Book} = require('./src/modules/Book.js');

//const whitelist = ['http://localhost:4200', 'https://troyanovskaya.github.io/bookApp']; // assuming front-end application is running on localhost port 3000
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

const getBooks = async (req, res) => {
    try{
        const books = await Book.find();
        res.status(200).send(books);
    }catch(e){
        res.status(500).send({ "message": "internal server error" });
    }    
}
const postBook = async (req, res) => {
    try{
        let _id = new mongoose.Types.ObjectId();
        let {book_name, book_authors, book_edition_year, book_description,
        book_keywords, book_genres, book_rates, book_average_rate, book_quotes,
        book_comments, book_reviews, book_img, book_series, book_series_numbers} = req.body
        const newBook = await new Book({_id, book_name, book_authors, book_edition_year, book_description,
            book_keywords, book_genres, book_rates, book_average_rate, book_quotes,
            book_comments, book_reviews, book_img, book_series, book_series_numbers});
        newBook.save();
        res.status(200).send(newBook);
    }catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }
}
const getBook = async (req, res) =>{
    try{
        const book = await Book.findById(req.params.id);
        if(book){
            res.status(200).send(book);
        } else{
            res.status(404).send('No book found');
        }
        
    } catch(e){
        res.status(500).send({ "message": "'No books found by the id provided", "e": e });
    }
}
const patchBook = async (req, res) =>{
    try{
        let book = await Book.findById(req.params.id);
        let update = req.body;
        book = await Book.findOneAndUpdate({_id: book._id}, update, {new: true});
        res.status(200).send(book);
    } catch(e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }    
}
const deleteBook = async(req, res) =>{
    try{
        let book = await Book.findByIdAndDelete(req.params.id);
        res.status(200).send(book);
    } catch (e){
        res.status(500).send({ "message": "internal server error", "e": e });
    }    
}
// app.get('/books', getBooks);
// app.post('/books', postBook);
// app.get('/books/:id', getBook);
// app.patch('/books/:id', patchBook);
// app.delete('/books/:id', deleteBook);

app.route('/books').get(getBooks).post(postBook);
app.route('/books/:id').get(getBook).patch(patchBook).delete(deleteBook);

app.listen(port, () =>{
    console.log('server has started');
})

