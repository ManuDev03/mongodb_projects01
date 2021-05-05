const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age:{
        type: Number
    }
})

// // model instance
// const me = new User({
//     name: 'Max',
//     age: 27
// })

// // save to db
// me.save().then(() => {
//     console.log(me)
// }).catch((error) =>{
//     console.log('Error!', error);
// })

// 1. Define the model with description and completed fields

const Task = mongoose.model('Task', {
    descryption: {
        type: String
    },
    completed: {
        type: Boolean
    }
})
// 2. Create a new instance of the model

const task = new Task({
    descryption: 'Learn the Mongoose library',
    completed: false
})
// 3. Save the model to the database

task.save().then(() => {
    console.log(task);
}).catch((error) => {
    console.log(error);
})
// 4. Test your work
