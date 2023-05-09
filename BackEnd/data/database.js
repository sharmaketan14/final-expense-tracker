const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
let database = null;

const connectToDatabase = async () => {
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
    database = client.db('expense-tracker')
}

const getDb = () => {
    if(!database) {
        throw {message : 'No databse found!'}
    } else {
        return database;
    }
}

module.exports = {
    connectToDatabase : connectToDatabase,
    getDb : getDb
};