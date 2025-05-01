const express = require('express')
const app = express()
require("./db/conn");
const port = 8080

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
})
