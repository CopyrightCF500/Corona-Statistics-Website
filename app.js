const path = require('path');

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const statsRouter = require('./routes/statsRoutes');

// Load port from environment file
const config = require('./config');

// Import express module: routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, modifying app settings
const app = express();

// connect to mongoDB database, hosted on Atlas Cloud
const dbURI = `mongodb+srv://${config.MONGODB_ATLAS_USER_NAME}:${config.MONGODB_ATLAS_PASSWORD}@cluster0.h2vmr.mongodb.net/corona_statistics_db?retryWrites=true&w=majority`
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        console.log('connected to DB');
        
        // Start listening after the database is loaded
        app.listen(config.PORT | 3000, err => {
            if(err){
                return console.log("ERROR", err);
            }
            console.log(`Listening on port ${config.PORT | 3000}!`);
         });
    })
    .catch((err) => console.log(err));

// use middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// HTTP Logger (tiny, combined, dev)
app.use(morgan('tiny'));
//app.use(express.static('public'));

// handle corona statistics routes
app.use('/stats', statsRouter);

app.set('views', path.join(__dirname+'/views/'));
app.set('view engine', 'ejs');

// handle root -> Home Page
app.get('/', (req, res) => {
    res.render('pages/index')
});

// handle About Page
app.get('/about', (req, res) => {
    res.render('pages/about')
});