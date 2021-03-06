const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('public/index.html');
})

app.listen(8022, () => console.log('port:8022, running!'))