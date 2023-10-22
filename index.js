// importing the express 
console.log("Coming here.")
const express = require('express');
// importing the cros
const cors = require('cors');
// importing the dotenv
require("dotenv").config();
// const Stripe = require("stripe");
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
// crreating the app 
const app = express();
app.use(express.json());
app.use(cors());
// Defining the Port

// Defining the apiRoutes ( backend/routes/apiRoutes.js)
const apiRoutes = require("./Core/routes/main");
const getSpecificService = require('./Core/controllers/Service').getSpecificService;

// Mongodb connection 
const connectDB = require("./config/db");
const resp = connectDB();

// Middleware
app.get('/',(req,res) =>
{
   res.json({message: resp})
   
})

app.get('/test', getSpecificService)


// // Middleware 
// app.use('/newApi',apiRoutes);


// error handeling middleware
app.use((error,req,res,next)=>{
    console.log("error")
    res.status(500).json({
        message:error.message,
        stack:error.stack
    })
    next(error)
})


app.listen(process.env.PORT , ()=>{
    console.log(`Port Startd and Working on Port : ${process.env.PORT}`)
})
