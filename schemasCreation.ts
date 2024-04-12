import {url, Genre, Author, Book, Series, Role, User} from './classes.js'
const mongoose = require('mongoose');
async function generateSchemas(){
  await mongoose.connect(url);
  const genreSchema = new mongoose.Schema(Genre);
  const seriesSchema = new mongoose.Schema(Series);
  const bookSchema = new mongoose.Schema(Book);
  const userSchema = new mongoose.Schema(User);
  const authorSchema = new mongoose.Schema(Author);

  const genre = mongoose.model('Genre', genreSchema);
  const series = mongoose.model('Series', seriesSchema);
  const book = mongoose.model('Book', bookSchema);
  const user = mongoose.model('User', userSchema);
  const author = mongoose.model('Author', authorSchema);
}


