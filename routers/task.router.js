const TaskController = require('../controllers/task.controller.js')
const AuthController = require('../controllers/auth.controller.js')
const router = require('express').Router()

/** GET **/

router.get('/tasks',
    AuthController.checkJWT,
    TaskController.getAll
)

router.get('/tasks/:id',
    AuthController.checkJWT,
    TaskController.get
)

/** POST **/

router.post('/tasks', 
    AuthController.checkJWT,
    TaskController.insert
)

/** PUT **/

router.put('/tasks/:id',
    AuthController.checkJWT,
    TaskController.modify
)

/** DELETE **/

router.delete('/tasks/:id', 
    AuthController.checkJWT,
    TaskController.delete
)

module.exports = router
