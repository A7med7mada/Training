// Load environment Variables
require('dotenv').config();
// Load Our Dependencies
const express = require('express'),
      app     = express(),
      port    = process.env.PORT;

//Static Middleware
app.use(express.static(__dirname + "/public"))
// Set view engine
app.set('view engine' , 'ejs');
// Set Application Routes 
app.use(require('./routes/web'));
// Running App Server
app.listen(port , ()=> {
    console.log(`Server running on localhost:${port}`);
});