var React = require('react');

var OptionVal = React.createClass({
	render: function(){
		return(<li><a>{this.props.name}</a></li>);
		
	}

});


module.exports = React.createClass({
	getInitialState: function (){
	return {
			selected:false}
		},	 
	
	selectClick:function(){
	    console.log("Click performed");
		if (this.state.selected)
		{
			this.setState({selected:false});
		}
		else
		{
	    		this.setState({selected:true});
		}
	},
	render: function(){

		var mySelect = this.state.selected;

		var optionValues = this.props.option? this.props.option.optionValues:[];
		
		var vals = optionValues.map(function(dataProps){
			return <OptionVal {...dataProps}/>	
			});
		return(
		<div>
			{this.props.option.optionValues &&this.props.option.optionValues.length>0?
 (<form><div className="btn-group sideBySide">
	<button type="button" className="btn ${mySelect?'btn-info':'btn-default'} dropdown-toggle myOption" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
    {this.props.option.optionDisplayName} <span className="caret"></span>
  </button>
	<ul className="dropdown-menu">
	{vals}
	</ul>
</div></form>)


 : <button className="btn btn-default sideBySide" onClick={this.selectClick}>{this.props.option.optionDisplayName}</button>}
		</div>
		);
	}


});
