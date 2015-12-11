var React = require('react');
var BaseMenuItem = React.createClass({

  mixins: [ History ],

  // initial state
  getInitialState: function() {
    return {
      // there was an error on logging in
      error: false
    };

  },
   selectMe : function(){
        console.log(this.props.itemId);
	this.props.selId = this.props.itemId;
	},

  getName: function(){

      return auth.getName();
  },
    render: function(){
        return(
<input className="baseRadioItem" type="radio" name="itemId" ref="itemId" value={this.props.itemId} onChange={this.selectMe}>
  {this.props.itemName}
</input>
        )
        
    }

});


module.exports = React.createClass({
    render: function(){
	var selId = this.props.selId;


	var MenuItems = this.props.menuItems.map(function(dataProps){
		dataProps['selId']=selId;
		return <BaseMenuItem {...dataProps} />
	});
        return(
<div>
        <h3>{this.props.category}</h3>
	<p className="categoryGroup">
	{MenuItems}
	</p>
</div>	
        );
    }

});
