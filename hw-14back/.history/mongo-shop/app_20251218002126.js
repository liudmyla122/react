const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

// чтобы Express понимал JSON
app.use(express.json())

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
