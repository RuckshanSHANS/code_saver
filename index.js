const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routerHome = require('./routes/homePage')
const routerNote = require('./routes/notePage')

//🍗🍗🍗Configuration
const app = express()
app.use(express.json())
dotenv.config()
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'))

//🍗🍗🍗NOTE PAGE
app.use('/', routerNote)

//🍗🍗🍗HOME PAGE
app.use('/', routerHome)  

//🍗🍗🍗DATABASE CONFIGURATION
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("✅DATABASE CONNECTED")
}).catch(err => console.log(err))


app.listen(3000,()=> console.log("✅ SERVER STARTED") ) 