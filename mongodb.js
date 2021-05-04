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





//    db.collection('users').findOne({_id: new ObjectID("609122d9a6793e3ac0a32615")},(error, user) =>{
//        if(error){
//            return console.log(`unable to fetch`);
//        }
//        console.log(user);
//    })

//    db.collection('users').find({ age: 23}).toArray((error, users) => {
//        console.log(users);
//    })

//    db.collection('users').find({ age: 23}).count((error, users) => {
//     console.log(users);
// })

db.collection('tasks').findOne({_id: new ObjectID("6091256aa77ed33b54a4aaf1")}, (error,task) => {
    console.log(task);
})

// db.collection('tasks').find({completed: false}).toArray((error,task) =>{
//     console.log(task)
// })
db.collection('tasks').find({completed: false}).count((error,task) =>{
    console.log(task)
})


})