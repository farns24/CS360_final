var React = require('react');
var Popular = require('./popular');



module.exports = React.createClass({
    componentDidMount: function() {

	$.get(this.props.source, function(results){
		   console.log(results);
		   this.props.data = results;
		});	
	},
   render: function() {

		var list = this.props.data.map(function(dataProps){
	return <Popular {...dataProps} />

	});
	return (
		<div className="col-md-10 col-xs-6">{list}</div>
	);
	
    }
});

