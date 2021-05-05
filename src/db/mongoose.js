const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    useCreateIndex: true
})

// Add password field to User
// 1. Setup the field as a required string
// 2.ensure the length is greater than 6
// 3. trim the password
// 4.   ensure the password doesnot contain "password"


const User = mongoose.model('User', {
    name: 
    {
        type: String,
        required: true,
        trim: true
    },
    email:
    {
        type:String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('Email is invalid')
            }
        }
    },
    password:
    {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age:
    {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// model instance
const me = new User({
    name: '        Mike',
    email: 'Mike@gmail.com',
    password:'mike123'

})

// save to db
me.save().then(() => {
    console.log(me)
}).catch((error) =>{
    console.log('Error!', error);
})

// 1. Define the model with description and completed fields

const Task = mongoose.model('Task', {
    descryption: {
        type: String
    },
    completed: {
        type: Boolean
    }
})
// // 2. Create a new instance of the model

// const task = new Task({
//     descryption: 'Learn the Mongoose library',
//     completed: false
// })
// // 3. Save the model to the database

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log(error);
// })
// // 4. Test your work
