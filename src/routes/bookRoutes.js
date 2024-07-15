
const express = require('express')
const bookRouter = express.Router();

const { getBooks, postBook,getBook, patchBook, deleteBook, checkBookPostBody, 
    patchBookArray, deleteField, findBooks} = require('../controllers/bookController')

bookRouter.route('/').get(findBooks).post(checkBookPostBody, postBook);
bookRouter.route('/:id').get(getBook).patch(patchBook).delete(deleteBook);

bookRouter.route('/:id/:property').patch(patchBookArray);

// app.get('/books', getBooks);
// app.post('/books', postBook);
// app.get('/books/:id', getBook);
// app.patch('/books/:id', patchBook);
// app.delete('/books/:id', deleteBook);

module.exports = bookRouter;