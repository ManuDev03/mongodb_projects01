// CRUD create Read Update Delete



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


const updatePromise = db.collection('users').updateOne({
    _id: new ObjectID("609122d9a6793e3ac0a32614")
}, {
    $set:{
        name:"mike"
    }
})
updatePromise.then((result) =>{
    console.log(result);
}).catch((error) => {
    console.log(error);
})

})