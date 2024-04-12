import {url} from "./classes";
const mongoose = require('mongoose');
import { MongoClient } from "mongodb";
const client = new MongoClient(url);
const database = client.db('book_app');

export async function getAllBooks(){
    const books_document = database.collection('books');
    const books = await books_document.find();
    const res = [];
    for await (const doc of books) {
        res.push(doc);
    }
    return res;

}