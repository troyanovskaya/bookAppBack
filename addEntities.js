"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var classes_js_1 = require("./classes.js");
var mongoose = require('mongoose');
var mongodb_1 = require("mongodb");
var client = new mongodb_1.MongoClient(classes_js_1.url);
var database = client.db('book_app');
function userSchema() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mongoose.connect(classes_js_1.url)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function addBooks() {
    return __awaiter(this, void 0, void 0, function () {
        var janeEyre, hungerGames, bookThief, book;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    janeEyre = { book_name: 'Jane Eyre', book_authors: [], book_edition_year: 2011, book_description: ["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
                        book_keywords: ["Charlotte Brontë", "Jane Eyre", "Victorian literature", "Bildungsroman", "Gothic fiction", "Romance", "Orphan", "Governess", "Thornfield Hall", "Mr. Rochester", "Bertha Mason", "Feminism", "Social class", "Religion", "Love", "Independence", "Morality", "England", "19th century", "Literary classic"],
                        book_genres: [], book_rates: [], book_average_rate: 4.8, book_quotes: [], book_comments: [],
                        book_reviews: [], book_img: 'assets/covers/book1.jpg', book_series: [] };
                    hungerGames = { book_name: 'The Hunger Games', book_authors: [], book_edition_year: 2008, book_description: ["In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.", "Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love."],
                        book_keywords: ["Suzanne Collins", "The Hunger Games", "Katniss Everdeen", "Peeta Mellark", "District 12", "Panem", "Dystopian fiction", "Young adult literature", "Survival", "Rebellion", "Government oppression", "The Capitol", "Arena", "Mockingjay", "Catching Fire", "Mockingjay symbol", "Primrose Everdeen", "Gale Hawthorne", "President Snow", "Revolution"],
                        book_genres: [], book_rates: [], book_average_rate: 4.5, book_quotes: [], book_comments: [],
                        book_reviews: [], book_img: 'assets/covers/book2.jpg', book_series: [] };
                    bookThief = { book_name: 'The Book Thief', book_authors: [], book_edition_year: 2005, book_description: ["Narrated by Death, Markus Zusak's groundbreaking new novel is the story of Liesel Meminger, a young foster girl living outside of Munich in Nazi Germany. Liesel scratches out a meager existence for herself by stealing when she discovers something she can't resist--books. Soon she is stealing books from Nazi book burnings, the mayor's wife's library, wherever they are to be found.", "With the help of her accordion-playing foster father, Liesel learns to read and shares her stolen books with her neighbors during bombing raids, as well as with the Jewish man hidden in her basement.", "Markus Zusak, award winning author of I Am the Messenger, has crafted an unforgettable novel about the ability of books to feed the soul."],
                        book_keywords: ["Markus Zusak", "The Book Thief", "Liesel Meminger", "Death", "Nazi Germany", "World War II", "Holocaust", "Books", "Stealing", "Friendship", "Family", "Loss", "Humanity", "Courage", "Hope", "Love", "Suffering", "Survival", "Grief", "Narrator"],
                        book_genres: [], book_rates: [], book_average_rate: 4.0, book_quotes: [], book_comments: [],
                        book_reviews: [], book_img: 'assets/covers/book3.jpg', book_series: [] };
                    book = database.collection('books');
                    return [4 /*yield*/, book.insertMany([janeEyre, hungerGames, bookThief])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function addGenres() {
    return __awaiter(this, void 0, void 0, function () {
        var fiction, historical, novel, classics, gothic, youngAdult, fantasy, scienceFiction, postApocalyptic, action, disutopia, genre;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    fiction = { genre_name: 'Fiction' };
                    historical = { genre_name: 'Historical' };
                    novel = { genre_name: 'Novel' };
                    classics = { genre_name: 'Classics' };
                    gothic = { genre_name: 'Gothic' };
                    youngAdult = { genre_name: 'Young adult' };
                    fantasy = { genre_name: 'Fantasy' };
                    scienceFiction = { genre_name: 'Science fiction' };
                    postApocalyptic = { genre_name: 'Post Apocalyptic' };
                    action = { genre_name: 'Action' };
                    disutopia = { genre_name: 'Disutopia' };
                    genre = database.collection('genres');
                    return [4 /*yield*/, genre.insertMany([fiction, historical, novel, classics, gothic, youngAdult, fantasy, scienceFiction, postApocalyptic, action, disutopia])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function addSeries() {
    return __awaiter(this, void 0, void 0, function () {
        var hungerGames, series;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    hungerGames = { series_name: 'Hunger Games' };
                    series = database.collection('series');
                    return [4 /*yield*/, series.insertMany([hungerGames])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function addAuthors() {
    return __awaiter(this, void 0, void 0, function () {
        var suzanneCollins, charlottebronte, markusZusak, authors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    suzanneCollins = { author_name: 'Suzanne Collins', author_biography: ["In 1991, Suzanne Collins began her professional career writing for children's television. She worked on the staffs of several Nickelodeon shows, including the Emmy-nominated hit Clarissa Explains it All and The Mystery Files of Shelby Woo. For preschool viewers, she penned multiple stories for the Emmy-nominated Little Bear and Oswald. She also co-wrote the Rankin/Bass Christmas special, Santa, Baby! with her friend, Peter Bakalian, which was nominated for a WGA Award in Animation. Most recently she was the Head Writer for Scholastic Entertainment's Clifford's Puppy Days,and a freelancer on Wow! Wow! Wubbzy! While working on a Kids WB show called Generation O! she met children's author and illustrator James Proimos, who talked her into giving children's books a try.", "Thinking one day about Alice in Wonderland, she was struck by how pastoral the setting must seem to kids who, like her own, lived in urban surroundings. In New York City, you're much more likely to fall down a manhole than a rabbit hole and, if you do, you're not going to find a tea party. What you might find...? Well, that's the story of Gregor the Overlander, the first book in her five-part fantasy/war series, The Underland Chronicles,which became a New York Times bestseller. It has been sold into 21 foreign territories.", "Her next series, The Hunger Games Trilogy, is an international bestseller. The Hunger Games has spent over six years to date on The New York Times bestseller list since publication in September 2008, and has also appeared consistently on USA Today and Publishers Weekly bestseller lists. It has been sold into 54 territories in 52 languages. In 2010 Suzanne was named to the TIME 100 list as well as the Entertainment Weekly Entertainers of the Year list. In 2016, she was presented the 2016 Authors Guild Award for Distinguished Service to the Literary Community for exemplifying the unique power of young people's literature to change lives and create lifelong book lovers. It was the first time the Guild presented the award to a YA author.", "Lionsgate released a film adaptation of THE HUNGER GAMES on March 23, 2012, directed by Gary Ross who also shared screenplay credit with Suzanne and Billy Ray. It broke multiple box office records and went on to become the 14th highest-grossing North American release of all time on its way to generating nearly $700 million at the worldwide box office. Lionsgate released the second installment THE HUNGER GAMES: CATCHING FIRE worldwide on November 22, 2013, directed by Francis Lawrence from a screenplay by Simon Beaufoy and Michael DeBruyn and bringing back stars Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson, Elizabeth Banks, Willow Shields, Paula Malcomson, Donald Sutherland, Stanley Tucci and Lenny Kravitz along with new cast members Philip Seymour Hoffman, Sam Claflin, Jena Malone and Jeffrey Wright. It was the highest-grossing domestic box office release of 2013 and the 10th highest-grossing domestic release of all time. Lionsgate released THE HUNGER GAMES: MOCKINGJAY – PART 1 on November 21, 2014 and THE HUNGER GAMES: MOCKINGJAY – PART 2 on November 20, 2015, also directed by Lawrence and welcoming Julianne Moore, Mahershala Ali, Natalie Dormer, and Patina Miller to the cast. Both screenplays were by Peter Craig and Danny Strong from an adaptation by Suzanne Collins. All four films were produced by Nina Jacobson of Color Force and Jon Kilik. The worldwide box for the entire franchise was nearly 3 billion.", "In September 2013, Suzanne released a critically acclaimed autobiographical picture book, YEAR OF THE JUNGLE, illustrated by James Proimos. It deals with the year she was six and her father was deployed to Viet Nam. It has been sold into 12 territories in 11 languages. Her first picture book, WHEN CHARLIE MCBUTTON LOST POWER, about a boy obsessed with computer games, was illustrated by Mike Lester and came out in 2005. It has been sold into 4 foreign territories", "Her books have sold over 100 million copies worldwide."],
                        author_date_of_birth: '10/08/1962', author_books: [], author_img: 'assets/authors/Suzanne_Collins.jpg', author_series: [] };
                    charlottebronte = { author_name: 'Charlotte Bronte', author_biography: ["Charlotte Brontë was an English novelist and poet, the eldest of the three Brontë sisters who survived into adulthood and whose novels became classics of English literature. She is best known for her novel Jane Eyre, which she published under the gender neutral pen name Currer Bell. Jane Eyre went on to become a success in publication, and is widely held in high regard in the gothic fiction genre of literature.", "She enlisted in school at Roe Head, Mirfield, in January 1831, aged 14 years. She left the year after to teach her sisters, Emily and Anne, at home, returning in 1835 as a governess. In 1839, she undertook the role of governess for the Sidgwick family, but left after a few months to return to Haworth, where the sisters opened a school but failed to attract pupils. Instead, they turned to writing and they each first published in 1846 under the pseudonyms of Currer, Ellis, and Acton Bell. Although her first novel, The Professor, was rejected by publishers, her second novel, Jane Eyre, was published in 1847. The sisters admitted to their Bell pseudonyms in 1848, and by the following year were celebrated in London literary circles.", "Charlotte Brontë was the last to die of all her siblings. She became pregnant shortly after her wedding in June 1854 but died on 31 March 1855, almost certainly from hyperemesis gravidarum, a complication of pregnancy which causes excessive nausea and vomiting"],
                        author_date_of_birth: '21/04/1816', author_books: [], author_img: 'assets/authors/Charlotte_Bronte.jpg', author_series: [] };
                    markusZusak = { author_name: 'Markus Zusak', author_biography: ["Markus Zusak is the international bestselling author of six novels, including The Book Thief and most recently, Bridge of Clay. His work is translated into more than forty languages, and has spent more than a decade on the New York Times bestseller list, establishing Zusak as one of the most successful authors to come out of Australia.", "All of Zusak’s books – including earlier titles, The Underdog, Fighting Ruben Wolfe, When Dogs Cry (also titled Getting the Girl), The Messenger (or I am the Messenger) – have been awarded numerous honours around the world, ranging from literary prizes to readers choice awards to prizes voted on by booksellers.", "In 2013, The Book Thief was made into a major motion picture, and in 2018 was voted one of America’s all-time favourite books, achieving 14th position on the PBS Great American Read. Also in 2018, Bridge of Clay was selected as a best book of the year in publications ranging from Entertainment Weekly to the Wall Street Journal. ", "Markus Zusak grew up in Sydney, Australia, and still lives there with his wife and two children."],
                        author_date_of_birth: '23/06/1975', author_books: [], author_img: 'assets/authors/Markus_Zusak.jpg', author_series: [] };
                    authors = database.collection('authors');
                    return [4 /*yield*/, authors.insertMany([suzanneCollins, charlottebronte, markusZusak])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function addUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var user1, user2, administrator, users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    user1 = { user_role: 'user', user_login: 'anna', user_password: '12345678', user_email: 'troyanovskaua2003@gmail.com', user_img: 'assets/avatars/lotus.png', user_books_saved: [],
                        user_books_read: [], user_books_dropped: [], user_rates: [], user_saved_quotes: [], user_comments: [],
                        user_reviews: [], user_books_recommendations: [] };
                    user2 = { user_role: 'user', user_login: 'kate', user_password: '87654321', user_email: 'place.with.secret@gmail.com', user_img: 'assets/avatars/lotus.png', user_books_saved: [],
                        user_books_read: [], user_books_dropped: [], user_rates: [], user_saved_quotes: [], user_comments: [],
                        user_reviews: [], user_books_recommendations: [] };
                    administrator = { user_role: 'administrator', user_login: 'admin', user_password: '!87654321', user_email: 'iren.140103@gmail.com', user_img: 'assets/avatars/lotus.png', user_books_saved: [],
                        user_books_read: [], user_books_dropped: [], user_rates: [], user_saved_quotes: [], user_comments: [],
                        user_reviews: [], user_books_recommendations: [] };
                    users = database.collection('users');
                    return [4 /*yield*/, users.insertMany([user1, user2, administrator])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function addConnections() {
    return __awaiter(this, void 0, void 0, function () {
        var authors, books, author1, author2, author3, book1, book2, book3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    authors = database.collection('authors');
                    books = database.collection('books');
                    return [4 /*yield*/, authors.find({ author_name: 'Suzanne Collins' })];
                case 1:
                    author1 = _a.sent();
                    return [4 /*yield*/, authors.find({ author_name: 'Charlotte Bronte' })];
                case 2:
                    author2 = _a.sent();
                    return [4 /*yield*/, authors.find({ author_name: 'Markus Zusak' })];
                case 3:
                    author3 = _a.sent();
                    return [4 /*yield*/, books.find({ book_name: 'The Hunger Games' })];
                case 4:
                    book1 = _a.sent();
                    return [4 /*yield*/, books.find({ book_name: 'Jane Eyre' })];
                case 5:
                    book2 = _a.sent();
                    return [4 /*yield*/, books.find({ book_name: 'Markus Zusak' })];
                case 6:
                    book3 = _a.sent();
                    console.log(book1);
                    console.log(book2);
                    console.log(book3);
                    console.log(author1);
                    console.log(author2);
                    console.log(author3);
                    return [2 /*return*/];
            }
        });
    });
}
//addGenres();
//addSeries();
//addAuthors();
//addBooks();
//addUsers();
addConnections();
