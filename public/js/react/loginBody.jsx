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

  // handle login button submit
  login: function(event) {
    // prevent default browser submit
    event.preventDefault();
    // get data from form
    var username = this.refs.username.value;
    var password = this.refs.password.value;
    if (!username || !password) {
      return;
    }
    // login via API
    auth.login(username, password, function(loggedIn) {
      // login callback
      if (!loggedIn)
        return this.setState({
          error: true
        });
      this.history.pushState(null, '/home');
    }.bind(this));
  },
render: function(){

	return(<div>
		<div className="loginForm">
			<div className="loginInnerDiv">
			<h2>login</h2>
				<form action="./api/authenticate" onSubmit={this.login}>
				    <span>User Name</span>
					<input type="input" placeHolder="User Name" name= "userName" ref="username"/><br/>
				    <span>Password</span><input type="password" placeHolder="password" name= "password" ref="password"/><br/>
				    <input type="submit" value="Login"/>
				</form>
			</div>
		</div>
			<p>or</p>
		<div className="loginForm">
			<div className="loginInnerDiv">
				<a href="#newUser">Create New Account</a>
			</div>
		</div>
</div>
	)

}

});
