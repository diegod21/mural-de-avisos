const PORT = 2000
const express = require('express')
const app = express()
const path = require("path")
const apiRoute = require('./router/api')

app.use('/', express.static(path.join(__dirname, "public")))
app.use('/api', apiRoute)


app.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}`)
})