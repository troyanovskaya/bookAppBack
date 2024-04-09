const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose = require('mongoose');
enum Role{
  'user',
  'administrator'
}
class Genre{
    genre_name:String
}
class Series{
  series_name: String
}
class Book{
  book_name: String;
  book_authors: Author[];
  book_description: String[];
  book_keywords: String[];
  book_genres: Genre[];
  book_rates: {user: User, rate: Number, date: Date}[];
  book_average_rate: Number;
  book_quotes: String[][];
  book_comments: {user: User, comment: String[], date: Date}[];
  book_reviews: {user: User, review: String[], date: Date}[];
  book_img: String;
  book_series: Series[]
}
class User{
  user_role: Role;
  user_login: String;
  user_password: String;
  user_img: String;
  user_books_saved: Book[];
  user_books_read: Book[];
  user_books_dropped: Book[];
  user_rates: {book: Book, rate: number};
  user_saved_quotes: {book:Book, quote: String[]};
  user_comments: {book: Book, comment: String[], date: Date};
  user_reviews: {book: Book, review: String[], date: Date};
  user_books_recommendations: Book[];
}
class Author{
  author_name: String[];
  author_biography: String[];
  author_books: Book[];
  author_img: String;
  author_series: Series[]
}
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
async function userSchema() {
    await mongoose.connect(url);
    // const userSchema = new mongoose.Schema({
    //     user_role: String,
    //     user_login: String,
    //     user_password: String,
    //     user_img: String,
    //     user_books_saved: [String],
    //     user_books_read: [String],
    //     user_books_dropped: [String],
    //     user_rates: [{
    //         book:{name: String, authors: [String], series: [String], }, }]
    // });
    // kittySchema.methods.speak = function speak() {
    //     const greeting = this.name
    //       ? 'Meow name is ' + this.name
    //       : 'I don\'t have a name';
    //     console.log(greeting);
    // };
    // const Kitten = mongoose.model('Kitten', kittySchema);
    // const silence = new Kitten({ name: 'Silence' });
    // const fluffy = new Kitten({ name: 'fluffy' });
    // fluffy.speak();
    // console.log(silence.name);
    // await fluffy.save();
    // fluffy.speak();
    // const kittens = await Kitten.find();
    // console.log(kittens);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
generateSchemas();