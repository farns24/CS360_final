var React = require('react');
console.log('side Menu Rendered');
module.exports = React.createClass({
    render: function(){
		return(
		    <div>
			<a className="sideMenuItem" href = "#newCreation">Make Creation</a><br/>
		        <a className="sideMenuItem" href = "#myItems">Manage my Creations</a>
		    </div>
		);
	}

});




