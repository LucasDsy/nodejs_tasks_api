const uid_gen = require('uid')

/** lowdb */
const dbConfig = require('../config/model.config.js')

exports.getTasks = () => {
  return new Promise((resolve, reject) => {
    var data = null; 
    dbConfig.getDB()
      .then((db) => {
        try {
          data = db.get('tasks')
            .value()
        } catch (error) {
          reject(error)
        }
        resolve(data)
      })
      .catch(err => { 
        console.log('Error : unable to reach database')
    })
  })
}

exports.getATask = (taskId) => {
  return new Promise((resolve, reject) => {
    var data = null; 
    dbConfig.getDB()
      .then((db) => {
        try {
          data = db.get('tasks')
            .find({ id: taskId })
            .value()
        } catch (error) {
          reject(error)
        }
        resolve(data)
      })
      .catch(err => { 
        console.log('Error : unable to reach database')
    })
  })
}


exports.createTask = (taskData) => {
  return new Promise((resolve, reject) => {
    dbConfig.getDB()
      .then((db) => {
        taskData.id = uid_gen.uid(16)
        try {
          db.get('tasks')
            .push(taskData)
            .write()
        } catch (error) {
            reject(error)
        }
        resolve(taskData.id)
      })
      .catch(err => { 
          console.log('Error : unable to reach database')
      })
  })
};

exports.updateTask = (taskId,taskData) => {
  return new Promise((resolve, reject) => {
    dbConfig.getDB()
      .then((db) => {
        try {
          db.get('tasks')
            .find({ id: taskId })
            .assign(taskData)
            .write()
        } catch (error) {
            reject(error)
        }
        resolve(taskData)
      })
      .catch(err => { 
          console.log('Error : unable to reach database')
      })
  })
};

exports.deleteTask = (taskId) => {
  return new Promise((resolve, reject) => {
    var data = null; 
    dbConfig.getDB()
      .then((db) => {
        try {
          db.get('tasks')
            .remove({ id: taskId })
            .write()
        } catch (error) {
          reject(error)
        }
        resolve(taskId)
      })
      .catch(err => { 
        console.log('Error : unable to reach database')
    })
  })
}