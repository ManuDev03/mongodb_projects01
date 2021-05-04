// CRUD create Read Update Delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')


const connnectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connnectionURL,{ useNewUrlParser: true},(err,client) => {
if(err){
    return console.log(`unable to connect to database`);
}
console.log(`connected correctly`);

const db = client.db(databaseName)



   db.collection('users').findOne({_id: new ObjectID("609122d9a6793e3ac0a32615")},(error, user) =>{
       if(error){
           return console.log(`unable to fetch`);
       }
       console.log(user);
   })

})