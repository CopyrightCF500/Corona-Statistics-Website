const express = require('express');
require('dotenv').config();

const google_maps_api_key = process.env.GOOGLE_MAPS_API_KEY;

// Import express module: routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, modifying app settings
const app = express();
const port = process.env.PORT || 3000;

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
