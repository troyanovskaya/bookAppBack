
const express = require('express')
const bookRouter = express.Router();

const { getBooks, postBook,getBook, patchBook, deleteBook, checkBookPostBody} = require('../controllers/bookController')

bookRouter.route('/').get(getBooks).post(checkBookPostBody, postBook);
bookRouter.route('/:id').get(getBook).patch(patchBook).delete(deleteBook);
// app.get('/books', getBooks);
// app.post('/books', postBook);
// app.get('/books/:id', getBook);
// app.patch('/books/:id', patchBook);
// app.delete('/books/:id', deleteBook);

module.exports = bookRouter;