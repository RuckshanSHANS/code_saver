const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routerHome = require('./routes/homePage')
const routerNote = require('./routes/notePage')

//๐๐๐Configuration
const app = express()
app.use(express.json())
dotenv.config()
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'))

//๐๐๐NOTE PAGE
app.use('/', routerNote)

//๐๐๐HOME PAGE
app.use('/', routerHome)  

//๐๐๐DATABASE CONFIGURATION
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("โDATABASE CONNECTED")
}).catch(err => console.log(err))


app.listen(process.env.PORT ,()=> console.log("โ SERVER STARTED") ) 