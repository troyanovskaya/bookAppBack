import {url} from './classes.js'
const mongoose = require('mongoose');
import { MongoClient } from "mongodb";
const client = new MongoClient(url);
const database = client.db('book_app');
import {getAllBooks} from './bookReq.js';



async function main(){
  const http = require('http');
  const server = http.createServer(async (request, response) =>{
    let path = request.url;
    console.log(path);
    if (path === '/books'){
      console.log('BOOKS');
      const books_document = database.collection('books');
      var books = await books_document.find();
      let res = [];
      for await (let doc of books){
        res.push(doc);
      }
      console.log(res)
      response.writeHead(200, { 'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': ['GET', 'POST', 'OPTIONS'],
      'Access-Control-Allow-Headers': ['Origin', 'Content-Type', 'Accept']});
      response.write(JSON.stringify(res));
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