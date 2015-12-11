var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;


var HomeHeaderClass = require('./homeHeader');
var PopularHeaderClass = require('./popularHeader');
var BrowseHeaderClass = require('./browseHeader');
var LoginHeaderClass = require('./loginHeader');
var Base = require('./base');
var OtherHeaderClass = require('./otherHeader');


module.exports = (
<Router>
    <Route path="/" component={Base}>
	<Route path="home" component={HomeHeaderClass}/>
	<Route path="popular" component={PopularHeaderClass}/>
	<Route path="browse" component={BrowseHeaderClass}/>
	<Route path="login" component={LoginHeaderClass}/>
	<Route path="newCreation" component={OtherHeaderClass}/>
	<Route path="newUser" component={OtherHeaderClass}/>
	<Route path="editItem" component={OtherHeaderClass}/>
	<Route path="myItems" component={OtherHeaderClass}/>
    </Route>
</Router>
)

