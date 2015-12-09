var React = require('react');
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth");

var NewCreationClass = require('./newCreationClass');
var Login = require('./loginBody');

module.exports = React.createClass({
	 mixins: [ History ],

  // initial state
  getInitialState: function() {
    return {
      // the user is logged in
      loggedIn: auth.loggedIn()
    };
  },
    render: function(){
	return(
		<div>{this.state.loggedIn ?(<NewCreationClass/>):(<Login/>)}</div>
	);

	}

});
