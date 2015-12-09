var React = require('react');
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth");

module.exports= React.createClass({
  mixins: [ History ],
  logout: function(index){
		console.log("Click Handeled");
		auth.logout();
	},
  getName: function(){

      return auth.getName();
  },
  // initial state
  getInitialState: function() {
    return {
      // the user is logged in
      loggedIn: auth.loggedIn()
    };
  },
    render: function(){
	return (
	<header>
		<ul>
		  <li className="top"><h1>SPFCreations</h1></li>
		  <li className="top"><a id="topHome" className="topSelected" href="#home">Home</a></li>
		  <li className="top"><a id="topPopular" className="topBar" href="#popular">Most Popular</a></li>
		  <li className="top"><a id="topBrowse" className="topBar" href="#browse">Browse</a></li>
		  {this.state.loggedIn ? (<li className="top" onClick={this.logout.bind(this,1)}><a id="topLogout" className= "topBar" >Logout</a></li>):
		  (<li className="top"><a id="topLogin" className= "topBar" href="#login">Login</a></li>)}
		</ul>
		{this.state.loggedIn ? (
		<ul>			
			<li className="top"><a id="topLogout" className= "topBar">{this.getName}</a></li>
		</ul>
		):
		  (<div></div>)}
	</header>

		);
	}

});







