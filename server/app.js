require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const apiRoutes = require('./routes/apiRoutes')

app.use(express.json())
app.use('/', apiRoutes)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Search Engine running on port ${port}!`))
