var React = require('react');
var params = require('./paramGetter');
var MenuOption = require('./menuOption');

module.exports = React.createClass({
	getInitialState: function(){

	return {
		options:[]	
	}
	
	},
	componentDidMount: function() {
    $.get("/itemToOption", function(result) {


     // console.log(result);
      if (this.isMounted()) {
        this.setState({
	  options: result[params.itemId]
        });
      }
    }.bind(this));
  },
	render: function(){
	var options ="";
	if (this.state.options!=null){
		options= this.state.options.map(function(dataProps){
		var props = {};
		props['option'] = dataProps;
		props['title'] = params.title;
			if (dataProps)
			{	
			return <MenuOption {...props}/>
			}
		});	
	}
	return (
		<div>{options}</div>
 			);
	}
});

