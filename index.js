"use strict"

require('dotenv').config()
const PORT = process.env.PORT
const express = require('express')
const app = express();
app.use(express.json())


require('express-async-errors')

const sequelize = require('./app/config/db')
const {syncBooks} = require('./app/models/booksModel')

const connect = async()=>{
await syncBooks();

sequelize.authenticate()
.then(()=>console.log('DB CONNECTED'))
.catch(()=>console.log('DB NOT CONNECTED'))
}

connect();

const booksRouter = require('./app/router/booksRouter.js')

app.get('/', (req,res)=>{
    res.send(req.body)
})

app.use('/api/books', booksRouter)
app.use(require('./app/middlewares/errorHandler.js'))

app.listen(PORT,()=>{console.log("Server running on: " + PORT)})

