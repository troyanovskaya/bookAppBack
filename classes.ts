export const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';

export enum Role{
    'user',
    'administrator'
  }
export  class Genre{
      genre_name:String;
  }
export class Series{
    series_name: String
  }
export  class Book{
    book_name: String;
    book_authors: Author[];
    book_edition_year: Number;
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
export  class User{
    user_role: Role;
    user_login: String;
    user_password: String;
    user_email: String;
    user_img: String;
    user_books_saved: Book[];
    user_books_read: Book[];
    user_books_dropped: Book[];
    user_rates: {book: Book, rate: number}[];
    user_saved_quotes: {book:Book, quote: String[]};
    user_comments: {book: Book, comment: String[], date: Date};
    user_reviews: {book: Book, review: String[], date: Date};
    user_books_recommendations: Book[];
  }
export  class Author{
    author_name: String[];
    author_biography: String[];
    author_date_of_birth: String;
    author_books: Book[];
    author_img: String;
    author_series: Series[]
}