// CRUD create Read Update Delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connnectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connnectionURL,{ useNewUrlParser: true},(err,client) => {
if(err){
    return console.log(`unable to connect to database`);
}
console.log(`connected correctly`);

const db = client.db(databaseName)

db.collection('users').insertOne({
    name:"Manu Maverik",
    hobbies:"flying jets,riding"
})
})