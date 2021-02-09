const path = require('path');

const express = require('express');
const morgan = require('morgan');
const statsRouter = require('./routes/statsRoutes');

// Load port from environment file
const { port } = require('./config');

// Import express module: routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, modifying app settings
const app = express();

// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// HTTP Logger (tiny, combined, dev)
app.use(morgan('tiny'));
//app.use(express.static('public'));

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

// handle corona statistics routes
app.use('/stats', statsRouter);

app.listen(port, err => {
   if(err){
       return console.log("ERROR", err);
   }
   console.log(`Listening on port ${port}!`);
});
