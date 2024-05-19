const {Author} = require('../schemas/Author');
const mongoose=require('mongoose');
const postAuthor = async (req, res) => {
    try{
        let _id = new mongoose.Types.ObjectId();
        let {author_name, author_biography, author_date_of_birth, author_books,
          author_img, author_series} = req.body;
        let newAuthor = await new Author({_id, author_name, author_biography, author_date_of_birth, author_books,
            author_img, author_series});
        newAuthor.save();
        res.status(200).send(newAuthor);
     }catch(e){
         res.status(500).send({ "message": "internal server error", "e": e });
     }
 }

 const getAuthorByName = async (req, res) => {
    try{
        let name = req.params.name;
        let authors = await Author.find({"author_name": name})
        res.status(200).send(authors);
     }catch(e){
         res.status(500).send({ "message": "internal server error", "e": e });
     }
 }


 module.exports = {
    postAuthor,
    getAuthorByName
 }