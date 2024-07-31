const {Author} = require('../schemas/Author');
const mongoose=require('mongoose');
const asyncErrorHandler = require('./asyncErrorHandler');
const postAuthor = asyncErrorHandler(async (req, res) => {
    let _id = new mongoose.Types.ObjectId();
    let {author_name, author_biography, author_date_of_birth, author_books,
        author_img, author_series} = req.body;
    let newAuthor = await new Author({_id, author_name, author_biography, author_date_of_birth, author_books,
        author_img, author_series});
    newAuthor.save();
    res.status(201).send(newAuthor);
 })

 const getAuthorByName = asyncErrorHandler(async (req, res) => {
    console.log(req)
    let name = req.params.name;
    console.log(req.params)
    let authors = await Author.find({"author_name": name})
    res.status(200).send(authors);
 })


 module.exports = {
    postAuthor,
    getAuthorByName
 }