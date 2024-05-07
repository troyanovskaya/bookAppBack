const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
const mongoose=require('mongoose');
mongoose.connect(url);
 
const cors = require('cors');
const express = require('express')
let morgan = require('morgan');

const app = express();
const bookRouter = require('./src/routes/bookRoutes.js');
const userRouter = require('./src/routes/userRoutes.js');
const commentRouter = require('./src/routes/commentRoutes.js');
const reviewRouter = require('./src/routes/reviewRoutes.js');
const quoteRouter = require('./src/routes/quoteRoutes.js');
const rateRouter = require('./src/routes/rateRoutes.js');


const port = 3000;

//const whitelist = ['http://localhost:4200', 'https://troyanovskaya.github.io/bookApp']; // assuming front-end application is running on localhost port 3000
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions));

app.use(cors());
//middleware to add body to the request
app.use(express.json())
app.use(morgan('tiny'))


app.use('/books', bookRouter);
app.use('/users', userRouter);
app.use('/comments', commentRouter);
app.use('/reviews', reviewRouter);
app.use('/quotes', quoteRouter);
app.use('/rates', rateRouter);

//console.log(app.get('env'))
app.listen(port, () =>{
    console.log('server has started');
})

