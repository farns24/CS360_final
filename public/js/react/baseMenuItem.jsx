var React = require('react');
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var auth = require("./auth");


module.exports = React.createClass({

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
