const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const PORT = process.env.PORT || 5500;
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

//Load env vars 
dotenv.config({ path: './config/config.env' });

//Connect to database
connectDB();

const app = express();

app.use(express.urlencoded());
app.use(express.static('assets'));
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