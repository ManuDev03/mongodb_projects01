const express = require('express')
const Task = require('../models/task')
const router = new express.Router()




router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)

    }catch (e) 
    {
        res.status(404).send(e)

    }

   
})
// setup a task reading endpoints
router.get('/tasks', async (req,res) => {

    try{
        const task = await Task.find({})
        res.send(task)
    }catch(e)
    {
        res.status(404).send()
    }

})

// creating fetch point for fetching a task by its id

router.get('/tasks/:id',async (req,res) => {
    const _id = req.params.id


    try {
        const task = await Task.findById(_id)
        if (!task){
            return res.status(404).send()
        }

        res.send(task)

    }catch(e)
    {
        res.status(404).send()
    }
    
})

router.patch('/tasks/:id', async (req,res) => {
  
    try 
    {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators:true })

        if (!task)
        {
            return res.status(404).send()
        }
        res.send(task)
    }
    catch(e)
    {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', async(req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task)
        {
            res.status(404).send()
        }

        res.send(task)
    }
    catch(e)
    {
        res.status(500).send()
    }
})

module.exports = router