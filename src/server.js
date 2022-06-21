import express from 'express'
import Controller from './services/Controller.js'
import database from './services/Database.js'
import Response from './services/Response.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  try {
    await database.sync()
    console.log('Connection has benn established sucessfully')
  } catch (error) {
    console.log('Unable to connect to the database')
  }

  const { controller, method, params } = req.body.action
  const resultController = new Controller(controller, method, params)

  try {
    const response = new Response(await resultController.callMethod())
    res.status(200).json({
      response: response.sucessResponse()
    })
  } catch (error) {
    const response = new Response(error.message)
    res.status(400).json({
      response: response.badResponse()
    })
  }
})

app.listen(process.env.SERVER_PORT, () => console.log(`Server listening on port ${process.env.SERVER_PORT}`))
