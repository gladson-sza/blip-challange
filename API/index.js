import 'dotenv/config'
import express from 'express'
import githubRouter from './src/routes/github.routes.js'

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use('/', githubRouter.router)


app.listen(PORT, (err) => {
  if (!err) {
    console.log("Server started and running on port: " + PORT)
  } else {
    console.log("Error initializating the server: ", err)
  }
})