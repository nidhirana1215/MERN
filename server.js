const express = require('express')
const mongoose = require('mongoose')
const app=express()
const routesStud=require('./routes/student_route')
const routeLogin=require('./routes/login')
const cors=require('cors')

mongoose.connect('mongodb://localhost:27017/student')

app.use(express.json())
app.use(cors())
app.use('/student',routesStud)
app.use('/student',routeLogin)

app.listen(5000,()=>{
    console.log('server is running....!')
})