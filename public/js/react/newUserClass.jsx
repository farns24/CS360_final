var React = require('react');
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth");


module.exports = React.createClass({
  // mixin for navigation
  mixins: [ History ],

  // initial state
  getInitialState: function() {
    return {
      // there was an error on logging in
      error: false
    };

  },
register: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var name = this.refs.name.value;
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if (!name || !username || !password) {
      return;
    }
    // register via the API
    auth.register(name, username, password, function(loggedIn) {
      // register callback
      if (!loggedIn)
        return this.setState({
          error: true
        });
      this.history.pushState(null, '/list');
    }.bind(this));
  },
render: function(){
	return(
	
		<div className="loginForm">
			<div className="loginInnerDiv">
			<h2>New User</h2>
				<form action="./api/users/register" onSubmit={this.register}>
				    <span>Name</span>
				    <input type="input" placeholder="Name" name= "name" ref="name"/><br/>
				    <span>Username</span>
				    <input type="username" placeholder="User Name" name= "username" ref="username" autoFocus={true}/><br/>
				    <span>Password</span>
				    <input type="password" placeholder="password" name= "password" ref="password"/><br/>
				    <input type="submit" value="Register"/>
				</form>
			</div>
		</div>
	);
}

});
//Darth vader
//lordVader
//notOverPadme

//R2-D2
//AstroDroid24
//beepchirp
