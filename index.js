const app = require('./config/router.config.js')
const UserRouter = require('./routers/user.router.js')
const TaskRouter = require('./routers/task.router.js')

app.use(UserRouter,TaskRouter)

