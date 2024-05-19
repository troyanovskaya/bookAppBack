const mongoose = require('mongoose');
const {Book} = require('./src/schemas/Book'); // Assuming you have defined the Book schema/model
const url = 'mongodb+srv://placewithsecret:ekdQ94LxLIIjYdSP@cluster1.cxw0wae.mongodb.net/book_app?retryWrites=true&w=majority&appName=Cluster1';
mongoose.connect(url);
// Define the function to delete the 'book_comments' field
async function deleteBookComments() {
    try {
        // Connect to the MongoDB database

        // Update documents to remove 'book_comments' field, excluding '_id' field
        const result = await Book.updateMany({}, { $unset: { 'book_rates': '' } }, { multi: true });
        
        //let result = await Book.find(); 
        console.log(`${result.nModified} documents updated`);

        // Close the connection
        await mongoose.disconnect();
    } catch (error) {
        console.error('Error deleting book comments:', error);
    }
}

// Call the function to delete 'book_comments' field
deleteBookComments();