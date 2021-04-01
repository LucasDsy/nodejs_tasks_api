const uid_gen = require('uid')

/** lowdb */
const dbConfig = require('../config/model.config.js')

exports.createUser = (userData) => {
  return new Promise((resolve, reject) => {
    dbConfig.getDB()
      .then((db) => {
        userData.id = uid_gen.uid(16)
        try {
          db.get('users')
            .push(userData)
            .write()
        } catch (error) {
            reject(error)
        }
        resolve(userData.id)
      })
      .catch(err => { 
          console.log('Error : unable to reach database')
      })
  })
};

exports.getHash = (username) => {
  return new Promise((resolve, reject) => {
    var data = null;
    dbConfig.getDB()
      .then((db) => {
        try {
          data = db.get('users')
            .find({ username: username })
            .value()
        } catch (error) {
            reject(error)
        }
        resolve(data.password)
      })
      .catch(err => { 
          console.log('Error : unable to reach database')
      })
  })
};

exports.userExists = (username) => {
  return new Promise((resolve, reject) => {
    var data = null;
    dbConfig.getDB()
      .then((db) => {
        try {
          data = db.get('users')
            .find({ username: username })
            .value()
        } catch (error) {
            reject(error)
        }
        resolve(data)
      })
      .catch(err => { 
          resolve(data)
      })
  })
};