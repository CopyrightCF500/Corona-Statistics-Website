const express = require('express');

const { port } = require('./src/config');

// Import express module: routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, modifying app settings
const app = express();

app.use(express.static('public'));

// handle root
app.get('/', (req, res) => {
    res.send('Hello World!')
    
});

/* app.get("/api/", (req, res) => {
    // handle api
});
 

app.post("/api", (req, res) => {
    console.log(req);
}); */

app.listen(port, err => {
   if(err){
       return console.log("ERROR", err);
   }
   console.log('Listening on port ${port}!');
});
