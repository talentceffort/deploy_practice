const express = require('express')

const app = express();

app.use('/', (req, res) => {
  res.send('Hello Server')
})

app.listen(5000, () => {
  console.log(`Server Open Port is : 5000`)
})