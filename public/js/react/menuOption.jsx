var React = require('react');

var OptionVal = React.createClass({
	render: function(){
		return(<li><a href="#">{this.props.name}</a></li>);
		
	}

});


module.exports = React.createClass({
	 
	
	render: function(){
		
		var optionValues = this.props.option? this.props.option.optionValues:[];
		
		var vals = optionValues.map(function(dataProps){
			return <OptionVal {...dataProps}/>	
			});
		return(
		<div>
			{this.props.option.optionValues ?
 (<div className="btn-group">
	<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {this.props.option.optionDisplayName} <span className="caret"></span>
  </button>
	<ul className="dropdown-menu">
	vals
	</ul>
</div>)


 : <h3>this.props.option.optionDisplayName</h3>}
		</div>
		);
	}


});
