//Base Setup

//calll needed packages here
var express = require('express'); //calls express
var app = express(); //define applcation using express
var bodyParser = require('body-parser');


// configure app to use bodyParser() to get information from POST
app.use(bodyParser());

var port = process.env.PORT || 3000;  //set port


//Routes for API
var router = express.Router(); // get and instance of express Router

// testing route to make sure it is working
router.get('/', function(req, res){
    res.json({message: 'Hooray welcome to my api'});
});
// add more routes to API here

// Register the routes
app.use('/api', router);

//Start the Server
app.listen(port);
console.log('Here we go server started on '+ port +  ' hold on tight');