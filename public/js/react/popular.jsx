var React = require('react');
var ItemMenu = require('./popularItem');


/**
Popular Item
*/
module.exports = React.createClass({
  render: function() {
    return (
    <div className="creationGridItem">
        <img src="/public/image/cherry.svg" className="creationGridItemImage"/>
	<a href="/creation/">
		//{this.props.itemName}
		Test
	</a>
	<ItemMenu />
    </div>
    );
  }
});





