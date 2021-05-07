require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('609248d7de59742877b27e87').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})