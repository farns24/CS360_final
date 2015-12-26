var React = require('react');

module.exports= React.createClass({
    render: function(){
	return (
	<header>
		<ul>
		  <li className="top"><h1>SPFCreations</h1></li>
		  <li className="top"><a id="topHome" className="topBar" href="#home">Home</a></li>
		  <li className="top"><a id="topBrowse" className="topBar" href="#browse">Browse</a></li>
		  <li className="top"><a id="topLogin" className= "topSelected" href="#login">Login</a></li>
		</ul>
	</header>

		);
	}

});







