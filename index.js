require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Starting up the database 
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.once('open', () => {
    console.log(`connected to mongodb on ${db.host}:${db.port}... `)
});
db.on('error', (err) => {
    console.log(`Database Error: \n${err}`)
})

// routes
app.use('/auth', require('./routes/auth'))

// listening to 3001
app.listen(process.env.PORT, () => {
    console.log(`server running on port: ${process.env.PORT}`)
})
