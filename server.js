var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var fs = require("fs");

var morgan = require('morgan');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./source/config');

var menu = require("./source/pullMenu.js");
var menuHelper = require("./source/menuHelper.js");

var creationRoute = require("./source/creationRoute.js");

var currentMenu = "";
var currentCategories = {};
var itemToOption = {};
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app.set('superSecret', config.secret);
//app.use('/api', creationRoute.getApiRoutes);
/*Bellow is a way of serving up static files. look into it.*/
app.use('/public', express.static("public"));

app.get('/users', creationRoute.getUsers);

var cb =  function(updatedMenu){
		console.log(updatedMenu);
		currentMenu = updatedMenu;
		creationRoute.storeMenu(currentMenu);
                currentCategories = menuHelper.getCategories(updatedMenu);
		itemToOption = menuHelper.getOptionMap(updatedMenu);
	};

try{
	creationRoute.loadMenu(cb);
	//menu.getMenu(cb);
}catch(err){

}
setInterval(function(){
	  try{
	  //console.log("Update Menu");
	  currentMenu = "";
	creationRoute.loadMenu(cb);
	  //menu.getMenu(cb);

	}catch(err){

	}
}
, 15*60 * 1000); 


app.get('/menu', function(req,res){
 res.setHeader('content-type', 'application/json');

res.send(currentMenu);
});

app.get('/categories', function(req,res){
 res.setHeader('content-type', 'application/json');

res.send(currentCategories);
});

app.get('/itemToOption', function(req,res){
 res.setHeader('content-type', 'application/json');

res.send(itemToOption);
});

// register a user
app.post('/api/users/register', creationRoute.register);

// login a user
app.post('/api/users/login', creationRoute.login);

app.post('/api/creation/', creationRoute.postItem);

app.get('/api/creation/:item_id', creationRoute.getItem);

app.put('/api/creation/:item_id', creationRoute.updateItem);

app.delete('/api/creation/:item_id', creationRoute.deleteItem);



app.post('/buildCreations',creationRoute.postCreation);

//app.post('/createNewUser',creationRoute.postNewUser);

app.get('/creations',creationRoute.getCreations);	

//app.get('/creation/:id',creationRoute.view);

//app.get('/creation/:id/edit',creationRoute.edit);


app.get('/', function (req, res) {
 //db query	
 
 res.setHeader('content-type', 'text/html');
 var data = fs.readFileSync("./index.html");
  res.send(data);
});

app.get('/titlebar.svg',function (req,res) {

    //console.log(req.toString());
    res.setHeader('content-type', 'image/svg+xml');
    var data = fs.readFileSync("./public/image/titlebar.svg");
   res.send(data);
});


app.get('/css/style.css',function (req,res) {

    console.log(req.toString());
    var data = fs.readFileSync("./public/css/style.css");
   res.send(data);
});

app.get('/image/background.jpg',function (req,res) {

    console.log(req.toString());
    var data = fs.readFileSync("./public/image/background.jpg");
   res.setHeader('content-type', 'image/jpeg');
   res.send(data);
});

app.get('/js/jquery.js',function (req,res) {

    console.log(req.toString());
    var data = fs.readFileSync("./public/js/jquery.js");
   //res.setHeader('content-type', 'text/jpeg');
   res.send(data);
});

app.get('/homeQuery.js',function (req,res) {

    console.log(req.toString());
    var data = fs.readFileSync("./source/homeQuery.js");
   //res.setHeader('content-type', 'text/jpeg');
   res.send(data);
});


//Lets define a port we want to listen to
const PORT=8080; 

//Create a server
//var server = http.createServer(handleRequest);
var server = app.listen(PORT, function() {

});
