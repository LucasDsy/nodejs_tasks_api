
const taskModel = require('../models/task.model.js')
const userModel = require('../models/user.model.js')
const validator = require('../config/schema.config.js')

exports.getAll = (req,res) => {
    taskModel.getTasks()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch(err => { 
            res.status(500).send('Internal server error : '+err)
        })
}

exports.get = (req,res) => {
    const taskId = req.params.id
    taskModel.getATask(taskId)
        .then((result) => {
            res.status(200).send(result)
        })
        .catch(err => { 
            res.status(500).send('Internal server error : '+err);
        })
}

exports.insert = (req,res) => {
    var test = validator.v.validate(req.body, validator.taskSchema)
    if (test.valid) {
        userModel.userExists(req.body.username)
            .then((result) => {
                if(result != null) {
                    taskModel.createTask(req.body)
                        .then((result) => {
                            res.status(201).send({id: result})
                        })
                        .catch(err => { 
                            res.status(500).send('Internal server error : '+err)
                        })
                } else {
                    res.status(409).send('This user doesnt exists')
                }
            })
            .catch(err => { 
                res.status(500).send('Internal server error : '+err)
            })
    } else {
        res.status(400).send('Incorrect JSON Body')
    }
}

exports.modify = (req,res) => {
    var test = validator.v.validate(req.body, validator.taskSchema)
    if (test.valid) {
        const taskId = req.params.id
        taskModel.updateTask(taskId,req.body)
            .then((result) => {
                res.status(201).send(result)
            })
            .catch(err => { 
                res.status(500).send('Internal server error : '+err);
            })
    } else {
        res.status(400).send('Incorrect JSON Body')
    }
}

exports.delete = (req,res) => {
    const taskId = req.params.id
    taskModel.deleteTask(taskId)
        .then((result) => {
            res.status(201).send(result)
        })
        .catch(err => { 
            res.status(500).send('Internal server error : '+err)
        })
}
