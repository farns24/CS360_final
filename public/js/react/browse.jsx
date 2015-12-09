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

var BrowseList = React.createClass({
   render: function() {
	
	
		var list = this.props.data.map(function(dataProps){
	return <Browse {...dataProps} />

	});
	return (
	<div>{list}</div>
	);
	
    }
});



var options = {
  data :[{ itemName : 'Test Item'},{itemName : 'Test Item 2'}]
};

var browse_el = React.createElement(BrowseList, options);

ReactDOM.render(popular_el,
  document.getElementById('browseList')
);
