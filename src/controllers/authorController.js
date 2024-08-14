const {Author} = require('../schemas/Author');
const mongoose=require('mongoose');
const asyncErrorHandler = require('./asyncErrorHandler');
const CustomError = require('../utils/customError');
const postAuthor = asyncErrorHandler(async (req, res, next) => {
    let _id = new mongoose.Types.ObjectId();
    let {author_name, author_biography, author_date_of_birth, author_books,
        author_img, author_series} = req.body;
    let newAuthor = await new Author({_id, author_name, author_biography, author_date_of_birth, author_books,
        author_img, author_series});
    newAuthor.save().then(()=> res.status(201)
    .send(newAuthor))
    .catch( err => next(err));
 })

 const getAuthorByName = asyncErrorHandler(async (req, res, next) => {
    let name = req.params.name;
    let authors = await Author.find({"author_name": name});
    res.status(200).send(authors);
 })


 module.exports = {
    postAuthor,
    getAuthorByName
 }