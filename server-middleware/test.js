const app = require('express')()
const axios = require('axios')

app.get('/test', async (req, res) => {
  await axios.get('https://dog.ceo/api/breeds/image/random').then((success) => {
    res.send(success.data)
  })
})

module.exports = app
