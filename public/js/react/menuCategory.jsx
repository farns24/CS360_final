var React = require('react');
var BaseMenuItem = require('./baseMenuItem');


module.exports = React.createClass({
    render: function(){
	var MenuItems = this.props.menuItems.map(function(dataProps){
		return <BaseMenuItem {...dataProps} />
	});
        return(
<div>
        <h3>{this.props.category}</h3>
	<p className="categoryGroup">
	{MenuItems}
	</p>
</div>	
        );
    }

});
