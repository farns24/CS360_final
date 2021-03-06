var mongoose = require('mongoose');
var express = require('express');

var fs = require("fs");

mongoose.connect('mongodb://localhost/scdbtest');
console.log("Test Connection Worked");
var creationSchema = new mongoose.Schema({name: 'string',userId:'number',creationId:'number',timesOrdered:'number'});
var Menu = require('./menuModel');
var User = require('./user');
var Item = require('./item');

/**
*
*/
var viewHTML = function(creation){

//var myJson = JSON.parse(creation);

return "<HTML>\
<Body>\
<h1>" + creation + "</h1>\
</Body>\
<HTML>";

}


/**
*
*/
exports.view = function(req,res){
 
var cId = req.params.id;

    Item.find({creationId:cId},function(err,creations) {
         //res.send(users);
	res.send(viewHTML(creations));
	
	});
	
    

};

exports.edit = function(req,res){
 var creationId = req.params.id;

    res.send("fish");

};


exports.getUsers = function(req,res){


User.find({},function(err,users) {
	res.send(users);
	});	

};





exports.getCreations = function(req,res){

Item.find({},function(err,users) {
	res.send(users);
	});
};

exports.postCreation = function(req,res){

    var cName = req.body.creationName;
    var cId = req.body.creationId;
    var uId = req.body.userId;
    var myCreation = new creation({name: cName ,userId: uId ,creationId:cId});
    
    myCreation.save(function(err,deathStar){

    });

var data = fs.readFileSync("./public/html/login.html");
   res.send(data);

}

exports.postNewUser = function(req,res){

    var uName = req.body.userName;
    var uId = 2;
    var pword = req.body.password;
    var nam = req.body.name;
    var myUser = new User({ name: nam, userName: uName, userId: uId,password: pword});
    
    myUser.save(function(err,myUser){

    });

var data = fs.readFileSync("./public/html/login.html");
   res.send(data);

}

exports.getApiRoutes = function(){
	var apiRoutes = express.Router();

	apiRoutes.get('/test',function(req, res) {

		res.json({ message:'test api'});

	});
	
	apiRoutes.get('/users', function(req, res) {

		User.find({},function(err,users) {
			res.json(users);
		});
	});

	apiRoutes.post('/authenticate', function(req, res) {

  // find the user
  myUser.findOne({
    username: req.body.username
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign(user, app.get('superSecret'), {
          expiresInMinutes: 1440 // expires in 24 hours
        });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   

    }

  });
});
return apiRoutes;
}

exports.register = function (req, res) {
  console.log("Request Hit the server");
  // find or create the user with the given username
  User.findOrCreate({username: req.body.username}, function(err, user, created) {
   
    if (created) {
     console.log("User Created");
      // if this username is not taken, then create a user record
      user.name = req.body.name;
      user.set_password(req.body.password);
      user.save(function(err) {
	if (err) {
	  res.sendStatus("403");
	  console.log(err);
	  return;
	}
        // create a token
	console.log("User Created");
	var token = User.generateToken(user.username);
        // return value is JSON containing the user's name and token
        res.json({name: user.name, token: token});
      });
    } else {
      // return an error if the username is taken
       console.log("User Not Created:");
      res.sendStatus("403");
    }
  });
}

exports.login = function (req, res) {
  // find the user with the given username
   console.log('Login Request hits server');
  User.findOne({username: req.body.username}, function(err,user) {
    if (err) {
      res.sendStatus(403);
      return;
    }
    // validate the user exists and the password is correct
    if (user && user.checkPassword(req.body.password)) {
      // create a token
      var token = User.generateToken(user.username);
      // return value is JSON containing user's name and token
      res.json({name: user.name, token: token});
    } else {
      res.sendStatus(403);
    }
  });
}

exports.listItems = function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, find all the user's items and return them
      Item.find({user:user.id}, function(err, items) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
	// return value is the list of items as JSON
	res.json({items: items});
      });
    } else {
      res.sendStatus(403);
    }
  });
}

exports.postItem = function (req,res) {
  // validate the supplied token
  // get indexes
  console.log("request hit server");
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
	console.log("User found");
      // if the token is valid, create the item for the user
      Item.create({title:req.body.item.title,itemId:req.body.item.itemId,user:user.id}, function(err,item) {
	if (err) {
	  console.log(err);
	  res.sendStatus(403);
	  return;
	}
	console.log("Success");
	res.json({item:item});
      });
    } else {
      res.sendStatus(403);
    }
  });
}

exports.getItem = function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      Item.findById(req.params.item_id, function(err, item) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
        // get the item if it belongs to the user, otherwise return an error
        if (item.user != user) {
          res.sendStatus(403);
	  return;
        }
        // return value is the item as JSON
        res.json({item:item});
      });
    } else {
      res.sendStatus(403);
    }
  });
}

exports.updateItem = function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      Item.findById(req.params.item_id, function(err,item) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
        // update the item if it belongs to the user, otherwise return an error
        if (item.user != user.id) {
          res.sendStatus(403);
	  return;
        }
        item.title = req.body.item.title;
        item.completed = req.body.item.completed;
        item.save(function(err) {
	  if (err) {
	    res.sendStatus(403);
	    return;
	  }
          // return value is the item as JSON
          res.json({item:item});
        });
      });
    } else {
      res.sendStatus(403);
    }
  });
}

exports.deleteItem =  function (req,res) {
  // validate the supplied token
  user = User.verifyToken(req.headers.authorization, function(user) {
    if (user) {
      // if the token is valid, then find the requested item
      Item.findByIdAndRemove(req.params.item_id, function(err,item) {
	if (err) {
	  res.sendStatus(403);
	  return;
	}
        res.sendStatus(200);
      });
    } else {
      res.sendStatus(403);
    }
  });
}

exports.storeMenu= function(currentMenu)
{
	Menu.create({id:1,menu:currentMenu}, function(err,item) {});

}

exports.loadMenu= function(cb)
{
	Menu.find({id:1}, function(err,item) {
		console.log(item[0]);
		cb(item[0].menu);
	});

}
