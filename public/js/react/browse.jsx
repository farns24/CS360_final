var React = require('react');
/**
Grid Item menu

*/
var ItemMenu = React.createClass({
    render: function() {
	return (
	<div className="creationGridItemMenu">
     	 	<a href='/creation/1'>Item Details</a>
        	<a href='/order/1'> Order Now</a>
	</div>
	);
	}

});


/**
Popular Item
*/
var Browse = React.createClass({
  render: function() {
    return (
    <div className="creationGridItem">
        <img src="/public/image/cherry.svg" className="creationGridItemImage"/>
	<a href="/creation/">
		{this.props.itemName}
	</a>
	<ItemMenu />
    </div>
    );
  }
});

module.exports = React.createClass({
   render: function() {
	
	
	return (
	<div>Browse List</div>
	);
	
    }
});

