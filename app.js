const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')
const url = 'mongodb+srv://balu:mongopassword@cluster0.6ujrr.mongodb.net/registration?retryWrites=true&w=majority'
const app = express()
app.use(cors()) 

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

app.use(express.json())
con.on('open' , function(){
    console.log("connected")
}
)
const demoRouter = require('./routes/api')
app.use('/cmm', demoRouter)
app.listen(9000 , function(){
    console.log("server started")
})