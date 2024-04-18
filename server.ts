import {url} from './classes.js'
const mongoose = require('mongoose');
import { MongoClient } from "mongodb";
const client = new MongoClient(url);
const database = client.db('book_app');
const { Book } = require('./src/modules/Book.js');
const { Author } = require('./src/modules/Author.js');
const { Genre } = require('./src/modules/Genre.js');



async function main(){
  const http = require('http');
  const server = http.createServer(async (request, response) =>{
    let path = request.url;
    console.log(path);
    if (path === '/books'){
      console.log('BOOKS');
      const books = await Book.find();
      // const books = await Book.find().then( (bs) =>{
      //   for (let b of bs){
      //     b.book_authors = b.book_authors.map(async(author) => {
      //       let a  = await Author.findById(author);
      //       console.log(a)
      //       return a;
      //     })
          
      //   }
      //   return bs;
      // });
    //  books.map( (book) => {
    //     book.book_authors.map(async(author) => {
    //       author = await Author.find({_id: author});
    //       console.log('!!!!!!!!!!!!!!!!!')
    //       console.log(author)
    //       book.save();
    //     })
    //   })
      response.writeHead(200, { 'Content-Type': 'text/javascript',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': ['GET', 'POST', 'OPTIONS'],
      'Access-Control-Allow-Headers': ['Origin', 'Content-Type', 'Accept']
    }      );
      response.write(JSON.stringify(books));
      response.end();
      
    }
    console.log('Request received!');
    //response.end('Hello from the server')
  })
    server.listen(8000, '127.0.0.1', () =>{
    console.log('Server has started');
  })
//Server on url http://127.0.0.1:8000/ type to send new request
}
main();