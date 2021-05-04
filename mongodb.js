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

// db.collection('users').insertOne({
//     name:"Manu Maverik",
//     hobbies:"flying jets,riding"
// }, (error, result) => {
//     if(error){
//         return console.log(`unable to insert user`);
//     }
//     console.log(result.ops);
// })


    // db.collection('users').insertMany([
    //     {
    //         name:'maggie',
    //         age:25
    //     },
    //     {
    //         name:'maverik',
    //         age:23
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log(`unable to insert documents`);
    //     }
    //     console.log(result.ops);
    // })

    db.collection('tasks').insertMany([
        {
            description: "go for a trip",
            completed: true
        },
        {
            description:"go do a adventure",
            completed: false
        },
        {
            description:'pot plants',
            completed:false
        }
    ], (error, result) => {
        if (error){
            return console.log(`unable to insert tasks`);
        }
        console.log(result.ops);
    })


})