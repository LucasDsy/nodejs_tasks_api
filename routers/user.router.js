const UserController = require('../controllers/user.controller.js')
const AuthController = require('../controllers/auth.controller.js')
const router = require('express').Router()

/** POST **/

router.post('/users/login',
    UserController.login
)

router.post('/users/register',
    UserController.insert
)

module.exports = router