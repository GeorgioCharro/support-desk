const express = require('express')
const colors = require('colors')
const dotenv=require('dotenv').config()
const PORT = process.env.PORT || 5000
const {errorHandler}= require('../backend/middleware/errorMiddleware')
const connectDB=require('./config/db')
const app = express()
//Connect to database
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:false})) // urlencoded part is to accept body xformdata format from the user

app.get('/',(req,res)=>{
    res.status(200).json({message:'Welcome to the Support Desk API'})
})
//Routes
app.use('/api/users',(require('./routes/userRoutes')))
app.use(errorHandler)
app.listen(PORT,()=>{console.log('server started on port 5000')})