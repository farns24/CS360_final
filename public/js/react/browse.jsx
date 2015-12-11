var React = require('react');
/**
Grid Item menu

*/



/**
Popular Item
*/
var Browse = React.createClass({
  render: function() {
    return (
    <div className="creationGridItem">
        <img src="/public/image/cherry.svg" className="creationGridItemImage"/>
	<a href="/creation/">
		{this.props.title}
	</a>
    </div>
    );
  }
});

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
	<div
  className="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">{items}</div>
	);
	
    }
});

