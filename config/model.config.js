const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
 
exports.getDB = () => {
  return new Promise((resolve, reject) => {
    try {
      const adapter = new FileSync('./data/db.json')
      const db = low(adapter)
      
      // if tasks or users are not defined, set them
      db.defaults({ tasks: [], users: [] })
        .write()

      resolve(db)
    } catch(error) {
      reject(error)
    }
  })
}