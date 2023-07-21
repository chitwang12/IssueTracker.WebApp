const express = require('express');//Requiring express module
const dotenv = require('dotenv');
const morgan = require('morgan');//Https request logger middleware ***** -> only for dev
const connectDB = require('./config/db'); //Requiring dotenv module
const colors = require('colors');//This is an additional module which I prefer to use helps me to distinguish results over the  console. ***** -> only for dev .
const PORT = process.env.PORT || 5500; //defining the port 
const expressLayouts = require('express-ejs-layouts'); //requiring the ejs layouts 
const path = require('path');

//Load env vars 
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

const app = express();

app.use(express.urlencoded());
app.use(express.static('assets')); //using this middleware to load external/ static files in the project 
app.use(expressLayouts);

// extracting styles and scripts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Setting up view Engine
app.set('view engine', 'ejs');
app.set('views', './views');


//Dev HTTP REquest Level middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
//use express router 
app.use('/',require('./routes'));
const server = app.listen(PORT , console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);