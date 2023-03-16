const express = require("express")
const path = require("path")
const dotenv = require('dotenv').config()
const port = 5000
const app = express()

//Enable Body Parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Set static folder
app.use(express.static(path.join(__dirname,'public')))

app.use('/openai', require('./routes/openAIrouter.js'))
app.listen(port,()=>console.log(`server is started : ${port}`))