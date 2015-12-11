var React = require('react');
/**
Grid Item menu

*/



/**
Popular Item
*/
var Browse = require('./browseItem');

module.exports = React.createClass({
		getInitialState: function(){

	return {
		items:[]	
	}
	
	},
	componentDidMount: function() {
    $.get("/creations", function(result) {


     // console.log(result);
      if (this.isMounted()) {
        this.setState({
	  items: result
        });
      }
    }.bind(this));
  },


   render: function() {
	var items = this.state.items.map(function(dataProps){
		return <Browse{...dataProps}/>
	});
	
	return (
	<div>{items}</div>
	);
	
    }
});

