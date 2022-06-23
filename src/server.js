import express from 'express'
import Controller from './services/Controller.js'
import database from './services/Database.js'

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
    res.status(200).json({
      response: await resultController.callMethod()
    })
  } catch (error) {
    res.status(400).json({
      response: await resultController.callMethod()
    })
  }
})

app.listen(process.env.SERVER_PORT, () => console.log(`Server listening on port ${process.env.SERVER_PORT}`))
