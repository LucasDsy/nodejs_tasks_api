/** dotenv */
require('dotenv').config()

const port = process.env.PORT

/** Express **/

const express = require('express')
const app = express()
app.use(express.json());

app.listen(port, () => {
    console.log('Listenning on http://localhost:'+port)
})

module.exports = app
