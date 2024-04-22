const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);

//const {Author} = require('./src/modules/Author.js');
const {Book} = require('./src/modules/Book.js');
// const {Comment} = require('./src/modules/Comment.js');
//const {Genre} = require('./src/modules/Genre.js');
// const {Quote} = require('./src/modules/Quote.js');
// const {Rate} = require('./src/modules/Rate.js');
// const {Review} = require('./src/modules/Review.js');
// //const {Series} = require('./src/modules/Series.js');
// const {User} = require('./src/modules/User.js');

async function addBooks(){
    const janeEyre = await new Book({_id: new mongoose.Types.ObjectId(), book_name: 'Jane Eyre', book_authors:['Charlotte Bronte'], book_edition_year: 1847, book_description:["Orphaned Jane Eyre endures an unhappy childhood, hated by her aunt and cousins and then sent to comfortless Lowood School. But life there improves and Jane stays on as a teacher, though she still longs for love and friendship. At Mr Rochester's house, where she goes to work as a governess, she hopes she might have found them - until she learns the terrible secret of the attic."],
     book_keywords: ["Charlotte Brontë", "Jane Eyre", "Victorian literature", "Bildungsroman", "Gothic fiction", "Romance", "Orphan", "Governess", "Thornfield Hall", "Mr. Rochester", "Bertha Mason", "Feminism", "Social class", "Religion", "Love", "Independence", "Morality", "England", "19th century", "Literary classic"],
     book_genres: ['Fiction', 'Historical', 'Novel', 'Romance', 'Classics', 'Gothic'], book_rates: [], book_average_rate: 4.8, book_quotes: [], book_comments:[],
     book_reviews: [], book_img: ['assets/covers/book1.jpg'], book_series: []});
    const hungerGames = await new Book({_id: new mongoose.Types.ObjectId(), book_name: 'The Hunger Games', book_authors:['Suzanne Collins'], book_edition_year:2008, book_description:["In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.", "Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love."],
     book_keywords: ["Suzanne Collins", "The Hunger Games", "Katniss Everdeen", "Peeta Mellark", "District 12", "Panem", "Dystopian fiction", "Young adult literature", "Survival", "Rebellion", "Government oppression", "The Capitol", "Arena", "Mockingjay", "Catching Fire", "Mockingjay symbol", "Primrose Everdeen", "Gale Hawthorne", "President Snow", "Revolution"],
     book_genres: ['Novel', 'Dystopian', 'Fiction', 'Action', 'Adventure', 'Postapocalyptic', 'Young Adult'], book_rates: [], book_average_rate: 4.5, book_quotes: [], book_comments:[],
     book_reviews: [], book_img: ['assets/covers/book2.jpg'], book_series: ['The Hunger Games']});
    const bookThief = await new Book({_id: new mongoose.Types.ObjectId(), book_name: 'The Book Thief', book_authors:['Markus Zusak'], book_edition_year:2005, book_description:["Narrated by Death, Markus Zusak's groundbreaking new novel is the story of Liesel Meminger, a young foster girl living outside of Munich in Nazi Germany. Liesel scratches out a meager existence for herself by stealing when she discovers something she can't resist--books. Soon she is stealing books from Nazi book burnings, the mayor's wife's library, wherever they are to be found.", "With the help of her accordion-playing foster father, Liesel learns to read and shares her stolen books with her neighbors during bombing raids, as well as with the Jewish man hidden in her basement.", "Markus Zusak, award winning author of I Am the Messenger, has crafted an unforgettable novel about the ability of books to feed the soul."],
     book_keywords: ["Markus Zusak", "The Book Thief", "Liesel Meminger", "Death", "Nazi Germany", "World War II", "Holocaust", "Books", "Stealing", "Friendship", "Family", "Loss", "Humanity", "Courage", "Hope", "Love", "Suffering", "Survival", "Grief", "Narrator"],
     book_genres: ['Historical', 'Novel', 'War Literature'], book_rates: [], book_average_rate: 4.0, book_quotes: [], book_comments:[],
     book_reviews: [], book_img: ['assets/covers/book3.jpg'], book_series: []});

     janeEyre.save().then( data => console.log(data.book_name));
     hungerGames.save().then( data => console.log(data.book_name));
     bookThief.save().then( data => console.log(data.book_name));
}
async function addGenres(){    
    const fiction = await new Genre({_id: new mongoose.Types.ObjectId(), genre_name:'Fiction'});
    const historical = await new Genre({_id: new mongoose.Types.ObjectId(), genre_name:'Historical'});
    const novel = await new Genre({_id: new mongoose.Types.ObjectId(), genre_name: 'Novel'});
    const classics = await new Genre({_id: new mongoose.Types.ObjectId(), genre_name: 'Classics'});
    const gothic = await new Genre({_id: new mongoose.Types.ObjectId(), genre_name: 'Gothic'});
    const youngAdult = await new Genre({_id: new mongoose.Types.ObjectId(), genre_name: 'Young adult'});
    const fantasy = await new Genre({_id: new mongoose.Types.ObjectId(), genre_name: 'Fantasy'});
    const scienceFiction = await new Genre({_id: new mongoose.Types.ObjectId(), genre_name: 'Science fiction'});
    const postApocalyptic = await new Genre({_id: new mongoose.Types.ObjectId(), genre_name: 'Post Apocalyptic'});
    const action = await new Genre({_id: new mongoose.Types.ObjectId(), genre_name: 'Action'});
    const disutopia = await new Genre({_id: new mongoose.Types.ObjectId(), genre_name: 'Disutopia'});
  
    
    fiction.save().then( data => console.log(data.genre_name));
    historical.save().then( data => console.log(data.genre_name));
    novel.save().then( data => console.log(data.genre_name));
    classics.save().then( data => console.log(data.genre_name));
    gothic.save().then( data => console.log(data.genre_name));
    youngAdult.save().then( data => console.log(data.genre_name));
    fantasy.save().then( data => console.log(data.genre_name));
    scienceFiction.save().then( data => console.log(data.genre_name));
    postApocalyptic.save().then( data => console.log(data.genre_name));
    action.save().then( data => console.log(data.genre_name));
    disutopia.save().then( data => console.log(data.genre_name));
}
async function addSeries(){
    const hungerGames = await new Series({_id: new mongoose.Types.ObjectId(), series_name: 'Hunger Games', series_books: []});
    hungerGames.save().then( data => console.log(data.series_name));
}
async function addAuthors(){
    const suzanneCollins = await new Author({_id: new mongoose.Types.ObjectId(), author_name: 'Suzanne Collins', author_biography: ["In 1991, Suzanne Collins began her professional career writing for children's television. She worked on the staffs of several Nickelodeon shows, including the Emmy-nominated hit Clarissa Explains it All and The Mystery Files of Shelby Woo. For preschool viewers, she penned multiple stories for the Emmy-nominated Little Bear and Oswald. She also co-wrote the Rankin/Bass Christmas special, Santa, Baby! with her friend, Peter Bakalian, which was nominated for a WGA Award in Animation. Most recently she was the Head Writer for Scholastic Entertainment's Clifford's Puppy Days,and a freelancer on Wow! Wow! Wubbzy! While working on a Kids WB show called Generation O! she met children's author and illustrator James Proimos, who talked her into giving children's books a try.", "Thinking one day about Alice in Wonderland, she was struck by how pastoral the setting must seem to kids who, like her own, lived in urban surroundings. In New York City, you're much more likely to fall down a manhole than a rabbit hole and, if you do, you're not going to find a tea party. What you might find...? Well, that's the story of Gregor the Overlander, the first book in her five-part fantasy/war series, The Underland Chronicles,which became a New York Times bestseller. It has been sold into 21 foreign territories.",
     "Her next series, The Hunger Games Trilogy, is an international bestseller. The Hunger Games has spent over six years to date on The New York Times bestseller list since publication in September 2008, and has also appeared consistently on USA Today and Publishers Weekly bestseller lists. It has been sold into 54 territories in 52 languages. In 2010 Suzanne was named to the TIME 100 list as well as the Entertainment Weekly Entertainers of the Year list. In 2016, she was presented the 2016 Authors Guild Award for Distinguished Service to the Literary Community for exemplifying the unique power of young people's literature to change lives and create lifelong book lovers. It was the first time the Guild presented the award to a YA author.",
      "Lionsgate released a film adaptation of THE HUNGER GAMES on March 23, 2012, directed by Gary Ross who also shared screenplay credit with Suzanne and Billy Ray. It broke multiple box office records and went on to become the 14th highest-grossing North American release of all time on its way to generating nearly $700 million at the worldwide box office. Lionsgate released the second installment THE HUNGER GAMES: CATCHING FIRE worldwide on November 22, 2013, directed by Francis Lawrence from a screenplay by Simon Beaufoy and Michael DeBruyn and bringing back stars Jennifer Lawrence, Josh Hutcherson, Liam Hemsworth, Woody Harrelson, Elizabeth Banks, Willow Shields, Paula Malcomson, Donald Sutherland, Stanley Tucci and Lenny Kravitz along with new cast members Philip Seymour Hoffman, Sam Claflin, Jena Malone and Jeffrey Wright. It was the highest-grossing domestic box office release of 2013 and the 10th highest-grossing domestic release of all time. Lionsgate released THE HUNGER GAMES: MOCKINGJAY – PART 1 on November 21, 2014 and THE HUNGER GAMES: MOCKINGJAY – PART 2 on November 20, 2015, also directed by Lawrence and welcoming Julianne Moore, Mahershala Ali, Natalie Dormer, and Patina Miller to the cast. Both screenplays were by Peter Craig and Danny Strong from an adaptation by Suzanne Collins. All four films were produced by Nina Jacobson of Color Force and Jon Kilik. The worldwide box for the entire franchise was nearly 3 billion.", "In September 2013, Suzanne released a critically acclaimed autobiographical picture book, YEAR OF THE JUNGLE, illustrated by James Proimos. It deals with the year she was six and her father was deployed to Viet Nam. It has been sold into 12 territories in 11 languages. Her first picture book, WHEN CHARLIE MCBUTTON LOST POWER, about a boy obsessed with computer games, was illustrated by Mike Lester and came out in 2005. It has been sold into 4 foreign territories", "Her books have sold over 100 million copies worldwide."],
    author_date_of_birth: '10/08/1962', author_books: [], author_img: 'assets/authors/Suzanne_Collins.jpg', author_series: []});
    const charlottebronte =  await new Author({_id: new mongoose.Types.ObjectId(), author_name: 'Charlotte Bronte', author_biography: ["Charlotte Brontë was an English novelist and poet, the eldest of the three Brontë sisters who survived into adulthood and whose novels became classics of English literature. She is best known for her novel Jane Eyre, which she published under the gender neutral pen name Currer Bell. Jane Eyre went on to become a success in publication, and is widely held in high regard in the gothic fiction genre of literature.", "She enlisted in school at Roe Head, Mirfield, in January 1831, aged 14 years. She left the year after to teach her sisters, Emily and Anne, at home, returning in 1835 as a governess. In 1839, she undertook the role of governess for the Sidgwick family, but left after a few months to return to Haworth, where the sisters opened a school but failed to attract pupils. Instead, they turned to writing and they each first published in 1846 under the pseudonyms of Currer, Ellis, and Acton Bell. Although her first novel, The Professor, was rejected by publishers, her second novel, Jane Eyre, was published in 1847. The sisters admitted to their Bell pseudonyms in 1848, and by the following year were celebrated in London literary circles.", "Charlotte Brontë was the last to die of all her siblings. She became pregnant shortly after her wedding in June 1854 but died on 31 March 1855, almost certainly from hyperemesis gravidarum, a complication of pregnancy which causes excessive nausea and vomiting"],
    author_date_of_birth: '21/04/1816', author_books: [], author_img: 'assets/authors/Charlotte_Bronte.jpg', author_series: []});
    const markusZusak =  await new Author({_id: new mongoose.Types.ObjectId(), author_name: 'Markus Zusak', author_biography: ["Markus Zusak is the international bestselling author of six novels, including The Book Thief and most recently, Bridge of Clay. His work is translated into more than forty languages, and has spent more than a decade on the New York Times bestseller list, establishing Zusak as one of the most successful authors to come out of Australia.", "All of Zusak’s books – including earlier titles, The Underdog, Fighting Ruben Wolfe, When Dogs Cry (also titled Getting the Girl), The Messenger (or I am the Messenger) – have been awarded numerous honours around the world, ranging from literary prizes to readers choice awards to prizes voted on by booksellers.", "In 2013, The Book Thief was made into a major motion picture, and in 2018 was voted one of America’s all-time favourite books, achieving 14th position on the PBS Great American Read. Also in 2018, Bridge of Clay was selected as a best book of the year in publications ranging from Entertainment Weekly to the Wall Street Journal. ", "Markus Zusak grew up in Sydney, Australia, and still lives there with his wife and two children."],
    author_date_of_birth: '23/06/1975', author_books: [], author_img: 'assets/authors/Markus_Zusak.jpg', author_series: []});
    suzanneCollins.save().then( data => console.log(data.author_name));
    charlottebronte.save().then( data => console.log(data.author_name));
    markusZusak.save().then( data => console.log(data.author_name));
}
async function addUsers(){
    const user1 = await new User({_id: new mongoose.Types.ObjectId(), user_role: 'user', user_login: 'anna', user_password: '12345678', user_email:'troyanovskaya2003@gmail.com', user_img: 'assets/avatars/lotus.png', user_books_saved: [],
        user_books_read: [], user_books_dropped: [], user_rates: [], user_saved_quotes: [], user_comments:[],
        user_reviews:[], user_books_recommendations:[]});
    const user2 = await new User( {_id: new mongoose.Types.ObjectId(), user_role: 'user', user_login: 'kate', user_password: '87654321', user_email:'place.with.secret@gmail.com', user_img: 'assets/avatars/lotus.png', user_books_saved: [],
        user_books_read: [], user_books_dropped: [], user_rates: [], user_saved_quotes: [], user_comments:[],
        user_reviews:[], user_books_recommendations:[]});
    const admin =  await new User({_id: new mongoose.Types.ObjectId(), user_role: 'admin', user_login: 'admin', user_password: '!87654321', user_email:'iren.140103@gmail.com', user_img: 'assets/avatars/lotus.png', user_books_saved: [],
        user_books_read: [], user_books_dropped: [], user_rates: [], user_saved_quotes: [], user_comments:[],
        user_reviews:[], user_books_recommendations:[]});

    user1.save().then( data => console.log(data.user_login));
    user2.save().then( data => console.log(data.user_login));
    admin.save().then( data => console.log(data.user_login));
}
async function addConnections(){
    const author1 = await Author.findOne({author_name: 'Suzanne Collins'});
    const author2 = await Author.findOne({author_name: 'Charlotte Bronte'});
    const author3 = await Author.findOne({author_name: 'Markus Zusak'});

    const book1 = await Book.findOne({book_name: 'The Hunger Games'});
    const book2 = await Book.findOne({book_name: 'Jane Eyre'});
    const book3 = await Book.findOne({book_name: 'The Book Thief'});

    const fiction = await Genre.findOne({genre_name:'Fiction'});
    const historical = await Genre.findOne({genre_name:'Historical'});
    const novel = await Genre.findOne({genre_name: 'Novel'});
    const classics = await Genre.findOne({genre_name: 'Classics'});
    const gothic = await Genre.findOne({genre_name: 'Gothic'});
    const youngAdult = await Genre.findOne({genre_name: 'Young adult'});
    const fantasy = await Genre.findOne({genre_name: 'Fantasy'});
    const scienceFiction = await Genre.findOne({genre_name: 'Science fiction'});
    const postApocalyptic = await Genre.findOne({genre_name: 'Post Apocalyptic'});
    const action = await Genre.findOne({genre_name: 'Action'});
    const disutopia = await Genre.findOne({genre_name: 'Disutopia'});
    //console.log(book2)
    //book1.book_authors.push(author1);
    //book2.book_authors.push(author2);
    //book3.book_authors.push(author3);

    book1.book_genres.push(fiction, classics, novel, youngAdult, fantasy, postApocalyptic, action, disutopia);
    book2.book_genres.push(fiction, historical, novel, classics, gothic);
    book3.book_genres.push(novel, historical)

    book1.save();
    book2.save();
    book3.save();

    // author1.author_books.push(book1);
    // author2.author_books.push(book2);
    // author3.author_books.push(book3);

    // author1.save();
    // author2.save();
    // author3.save();

}
addBooks();
// addGenres();
// addSeries();
// addAuthors();
// addUsers();
// addConnections();