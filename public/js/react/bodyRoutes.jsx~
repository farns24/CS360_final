var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Popular = require('./popularList');

var LoginBodyClass = require('./loginBody');
var NewCreationClass = require('./newCreationAuth');
var NewUserBodyClass = require('./newUserClass');
var Base = require('./base');
var Browse = require('./browse');
var HomeBody = require('./homeBody');

module.exports = (
<Router>
    <Route path="/" component={Base}>
	<Route path="newCreation" component={NewCreationClass}/>
	<Route path="login" component={LoginBodyClass}/>
	<Route path="newUser" component={NewUserBodyClass}/>
	<Route path="popular" component={Popular}/>
	<Route path="browse" component={Browse}/>
	<Route path="home" component={HomeBody}/>
    </Route>
</Router>
)

