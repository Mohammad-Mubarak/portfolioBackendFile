const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cor = require('cors')

const mydata = require("./data.json")
app.use(cor())

require("./db/connect")
const Data = require('./model/data')

app.get('/data', async (req, res) => {
  try {
    const resultData = await Data.find({})
    if (!resultData) {
      return res.send("Data not available")
    }
    res.send(resultData)
    console.log(resultData)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

app.post('/add', async (req, res) => {
  try {
    await Data.deleteMany()
    await Data.create(mydata)
    console.log("Added data")
    res.end()
  } catch (error) {
    console.error(error)
    res.status(500).send('Server Error')
  }
})

app.listen(port, () => {
  console.log("Listening on port", port)
})
