var React = require('react');

var OptionVal = React.createClass({
	render: function(){
		return(<div>this.props.name</div>);
		
	}

});


module.exports = React.createClass({
	 
	
	render: function(){
		
		var optionValues = this.props.option.optionValues;
		
		var vals = optionValues.map(function(dataProps){
			<OptionVal {...dataProps}/>	
		});
		return(<div><h3>{this.props.option.optionDisplayName}</h3>
		{vals}</div>
		);
	}


});
