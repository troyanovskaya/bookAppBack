import {url} from './classes.js'
const mongoose = require('mongoose');
import { MongoClient } from "mongodb";
const client = new MongoClient(url);
const database = client.db('book_app');
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
    // };
    // kittySchema.methods.speak = function speak( {
    //     const greeting = this.name
    //       ? 'Meow name is ' + this.name
    //       : 'I don\'t have a name';
    //     console.log(greeting;
    // };
    // const Kitten = mongoose.model('Kitten', kittySchema;
    // const silence = new Kitten({ name: 'Silence' };
    // const fluffy = new Kitten({ name: 'fluffy' };
    // fluffy.speak(;
    // console.log(silence.name;
    // await fluffy.save(;
    // fluffy.speak(;
    // const kittens = await Kitten.find(;
    // console.log(kittens;
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test';` if your database has auth enabled
  }
async function addBooks(){
    const janeEyre = {book_name: 'Jane Eyre', book_authors:[], book_edition_year:2011, book_description:["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
     book_keywords: ["Charlotte Brontë", "Jane Eyre", "Victorian literature", "Bildungsroman", "Gothic fiction", "Romance", "Orphan", "Governess", "Thornfield Hall", "Mr. Rochester", "Bertha Mason", "Feminism", "Social class", "Religion", "Love", "Independence", "Morality", "England", "19th century", "Literary classic"],
     book_genres: [], book_rates: [], book_average_rate: 4.8, book_quotes: [], book_comments:[],
     book_reviews: [], book_img: 'assets/covers/book1.jpg', book_series: []};
    const hungerGames = {book_name: 'The Hunger Games', book_authors:[], book_edition_year:2008, book_description:["In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.", "Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love."],
     book_keywords: ["Suzanne Collins", "The Hunger Games", "Katniss Everdeen", "Peeta Mellark", "District 12", "Panem", "Dystopian fiction", "Young adult literature", "Survival", "Rebellion", "Government oppression", "The Capitol", "Arena", "Mockingjay", "Catching Fire", "Mockingjay symbol", "Primrose Everdeen", "Gale Hawthorne", "President Snow", "Revolution"],
     book_genres: [], book_rates: [], book_average_rate: 4.5, book_quotes: [], book_comments:[],
     book_reviews: [], book_img: 'assets/covers/book2.jpg', book_series: []};
    const bookThief = {book_name: 'The Book Thief', book_authors:[], book_edition_year:2005, book_description:["Narrated by Death, Markus Zusak's groundbreaking new novel is the story of Liesel Meminger, a young foster girl living outside of Munich in Nazi Germany. Liesel scratches out a meager existence for herself by stealing when she discovers something she can't resist--books. Soon she is stealing books from Nazi book burnings, the mayor's wife's library, wherever they are to be found.", "With the help of her accordion-playing foster father, Liesel learns to read and shares her stolen books with her neighbors during bombing raids, as well as with the Jewish man hidden in her basement.", "Markus Zusak, award winning author of I Am the Messenger, has crafted an unforgettable novel about the ability of books to feed the soul."],
     book_keywords: ["Markus Zusak", "The Book Thief", "Liesel Meminger", "Death", "Nazi Germany", "World War II", "Holocaust", "Books", "Stealing", "Friendship", "Family", "Loss", "Humanity", "Courage", "Hope", "Love", "Suffering", "Survival", "Grief", "Narrator"],
     book_genres: [], book_rates: [], book_average_rate: 4.0, book_quotes: [], book_comments:[],
     book_reviews: [], book_img: 'assets/covers/book3.jpg', book_series: []};

     const book = database.collection('books');
     await book.insertMany([janeEyre, hungerGames, bookThief]);
}
async function addGenres(){
    
    const fiction = {genre_name:'Fiction'};
    const historical = {genre_name:'Historical'};
    const novel = {genre_name: 'Novel'};
    const classics = {genre_name: 'Classics'};
    const gothic = {genre_name: 'Gothic'};
    const youngAdult = {genre_name: 'Young adult'};
    const fantasy = {genre_name: 'Fantasy'};
    const scienceFiction = {genre_name: 'Science fiction'};
    const postApocalyptic = {genre_name: 'Post Apocalyptic'};
    const action = {genre_name: 'Action'};
    const disutopia = {genre_name: 'Disutopia'};
  
    
    const genre = database.collection('genres');
    await genre.insertMany([fiction, historical, novel, classics, gothic, youngAdult, fantasy, scienceFiction, postApocalyptic, action, disutopia]);
}
async function addSeries(){
    const hungerGames = {series_name: 'Hunger Games'};
    const series = database.collection('series');
    await series.insertMany([hungerGames]);
}
async function addAuthors(){
    // author_name: String[];
    // author_biography: String[];
    // author_date_of_birth: Number;
    // author_books: Book[];
    // author_img: String;
    // author_series: Series[]
    const suzanneCollins = {author_name: 'Suzanne Collins', author_biography: ["In 1991, Suzanne Collins began her professional career writing for children's television. She worked on the staffs of several Nickelodeon shows, including the Emmy-nominated hit Clarissa Explains it All and The Mystery Files of Shelby Woo. For preschool viewers, she penned multiple stories for the Emmy-nominated Little Bear and Oswald. She also co-wrote the Rankin/Bass Christmas special, Santa, Baby! with her friend, Peter Bakalian, which was nominated for a WGA Award in Animation. Most recently she was the Head Writer for Scholastic Entertainment's Clifford's Puppy Days,and a freelancer on Wow! Wow! Wubbzy! While working on a Kids WB show called Generation O! she met children's author and illustrator James Proimos, who talked her into giving children's books a try.", "Thinking one day about Alice in Wonderland, she was struck by how pastoral the setting must seem to kids who, like her own, lived in urban surroundings. In New York City, you're much more likely to fall down a manhole than a rabbit hole and, if you do, you're not going to find a tea party. What you might find...? Well, that's the story of Gregor the Overlander, the first book in her five-part fantasy/war series, The Underland Chronicles,which became a New York Times bestseller. It has been sold into 21 foreign territories.", "Her next series, The Hunger Games Trilogy, is an international bestseller. The Hunger Games has spent over six years to date on The New York Times bestseller list since publication in September 2008, and has also appeared consistently on USA Today and Publishers Weekly bestseller lists. It has been sold into 54 territories in 52 languages. In 2010 Suzanne was named to the TIME 100 list as well as the Entertainment Weekly Entertainers of the Year list. In 2016, she was presented the 2016 Authors Guild Award for Distinguished Service to the Literary Community for exemplifying the unique power of young people's literature to change lives and create lifelong book lovers. It was the first time the Guild presented the award to a YA author.", "Lionsgate released a film adaptation of THE HUNGER GAMES on March 23, 2012, directed by Gary Ross who also shared screenplay credit with Suzanne and Billy Ray. It broke multiple box office records and went on to become the 14th highest-grossing North American release of all time on its way to generating nearly $700 million at the worldwide box office. Lionsgate released the second installment THE HUNGER GAMES: CATCHING FIRE worldwide on November 22, 2013, directed by Francis Lawrence from a screenplay by Simon Beaufoy and Michael DeBruyn and bringing back stars Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson, Elizabeth Banks, Willow Shields, Paula Malcomson, Donald Sutherland, Stanley Tucci and Lenny Kravitz along with new cast members Philip Seymour Hoffman, Sam Claflin, Jena Malone and Jeffrey Wright. It was the highest-grossing domestic box office release of 2013 and the 10th highest-grossing domestic release of all time. Lionsgate released THE HUNGER GAMES: MOCKINGJAY – PART 1 on November 21, 2014 and THE HUNGER GAMES: MOCKINGJAY – PART 2 on November 20, 2015, also directed by Lawrence and welcoming Julianne Moore, Mahershala Ali, Natalie Dormer, and Patina Miller to the cast. Both screenplays were by Peter Craig and Danny Strong from an adaptation by Suzanne Collins. All four films were produced by Nina Jacobson of Color Force and Jon Kilik. The worldwide box for the entire franchise was nearly 3 billion.", "In September 2013, Suzanne released a critically acclaimed autobiographical picture book, YEAR OF THE JUNGLE, illustrated by James Proimos. It deals with the year she was six and her father was deployed to Viet Nam. It has been sold into 12 territories in 11 languages. Her first picture book, WHEN CHARLIE MCBUTTON LOST POWER, about a boy obsessed with computer games, was illustrated by Mike Lester and came out in 2005. It has been sold into 4 foreign territories", "Her books have sold over 100 million copies worldwide."],
    author_date_of_birth: '10/08/1962', author_books: [], author_img: 'assets/authors/Suzanne_Collins.jpg', author_series: []};
    const charlottebronte = {author_name: 'Charlotte Bronte', author_biography: ["Charlotte Brontë was an English novelist and poet, the eldest of the three Brontë sisters who survived into adulthood and whose novels became classics of English literature. She is best known for her novel Jane Eyre, which she published under the gender neutral pen name Currer Bell. Jane Eyre went on to become a success in publication, and is widely held in high regard in the gothic fiction genre of literature.", "She enlisted in school at Roe Head, Mirfield, in January 1831, aged 14 years. She left the year after to teach her sisters, Emily and Anne, at home, returning in 1835 as a governess. In 1839, she undertook the role of governess for the Sidgwick family, but left after a few months to return to Haworth, where the sisters opened a school but failed to attract pupils. Instead, they turned to writing and they each first published in 1846 under the pseudonyms of Currer, Ellis, and Acton Bell. Although her first novel, The Professor, was rejected by publishers, her second novel, Jane Eyre, was published in 1847. The sisters admitted to their Bell pseudonyms in 1848, and by the following year were celebrated in London literary circles.", "Charlotte Brontë was the last to die of all her siblings. She became pregnant shortly after her wedding in June 1854 but died on 31 March 1855, almost certainly from hyperemesis gravidarum, a complication of pregnancy which causes excessive nausea and vomiting"],
    author_date_of_birth: '21/04/1816', author_books: [], author_img: 'assets/authors/Charlotte_Bronte.jpg', author_series: []};
    const markusZusak = {author_name: 'Markus Zusak', author_biography: ["Markus Zusak is the international bestselling author of six novels, including The Book Thief and most recently, Bridge of Clay. His work is translated into more than forty languages, and has spent more than a decade on the New York Times bestseller list, establishing Zusak as one of the most successful authors to come out of Australia.", "All of Zusak’s books – including earlier titles, The Underdog, Fighting Ruben Wolfe, When Dogs Cry (also titled Getting the Girl), The Messenger (or I am the Messenger) – have been awarded numerous honours around the world, ranging from literary prizes to readers choice awards to prizes voted on by booksellers.", "In 2013, The Book Thief was made into a major motion picture, and in 2018 was voted one of America’s all-time favourite books, achieving 14th position on the PBS Great American Read. Also in 2018, Bridge of Clay was selected as a best book of the year in publications ranging from Entertainment Weekly to the Wall Street Journal. ", "Markus Zusak grew up in Sydney, Australia, and still lives there with his wife and two children."],
    author_date_of_birth: '23/06/1975', author_books: [], author_img: 'assets/authors/Markus_Zusak.jpg', author_series: []};
    const authors = database.collection('authors');
    await authors.insertMany([suzanneCollins, charlottebronte, markusZusak]);
}
async function addUsers(){
    // user_role: Role;
    // user_login: String;
    // user_password: String;
    // user_img: String;
    // user_books_saved: Book[];
    // user_books_read: Book[];
    // user_books_dropped: Book[];
    // user_rates: {book: Book, rate: number};
    // user_saved_quotes: {book:Book, quote: String[]};
    // user_comments: {book: Book, comment: String[], date: Date};
    // user_reviews: {book: Book, review: String[], date: Date};
    // user_books_recommendations: Book[];
    const user1 = {user_role: 'user', user_login: 'anna', user_password: '12345678', user_email:'troyanovskaua2003@gmail.com', user_img: 'assets/avatars/lotus.png', user_books_saved: [],
        user_books_read: [], user_books_dropped: [], user_rates: [], user_saved_quotes: [], user_comments:[],
        user_reviews:[], user_books_recommendations:[]};
    const user2 = {user_role: 'user', user_login: 'kate', user_password: '87654321', user_email:'place.with.secret@gmail.com', user_img: 'assets/avatars/lotus.png', user_books_saved: [],
        user_books_read: [], user_books_dropped: [], user_rates: [], user_saved_quotes: [], user_comments:[],
        user_reviews:[], user_books_recommendations:[]};
    const administrator = {user_role: 'administrator', user_login: 'admin', user_password: '!87654321', user_email:'iren.140103@gmail.com', user_img: 'assets/avatars/lotus.png', user_books_saved: [],
        user_books_read: [], user_books_dropped: [], user_rates: [], user_saved_quotes: [], user_comments:[],
        user_reviews:[], user_books_recommendations:[]};

    const users = database.collection('users');
    await users.insertMany([user1, user2, administrator]);
}
async function addConnections(){
    const authors = database.collection('authors');
    const books = database.collection('books');
    const author1 = await authors.find({author_name: 'Suzanne Collins'});
    const author2 = await authors.find({author_name: 'Charlotte Bronte'});
    const author3 = await authors.find({author_name: 'Markus Zusak'});
    const book1 = await books.find({book_name: 'The Hunger Games'});
    const book2 = await books.find({book_name: 'Jane Eyre'});
    const book3 = await books.find({book_name: 'Markus Zusak'});
    console.log(book1);
    console.log(book2);
    console.log(book3);
    console.log(author1);
    console.log(author2);
    console.log(author3);
}
//addGenres();
//addSeries();
//addAuthors();
//addBooks();
//addUsers();
addConnections()