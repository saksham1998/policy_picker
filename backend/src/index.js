// Import Libraries
const express = require('express');
require('../db/mongoose');
const cors = require('cors');
const mainRoutes = require('./routers/main');

// Initialse App and its parameters
const app = express();
const port = process.env.PORT || 3001;

// JSON and UrlParser Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Route Middleware
app.use('/ngo',mainRoutes)

app.listen(port,()=>{
    console.log(`Server is running at port ${port}!!!`)
})