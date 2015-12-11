var React = require('react');
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var selectedItemId =0;
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
	selectedItemId = this.props.itemId;
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

var MenuCategory = React.createClass({
    render: function(){

	var MenuItems = this.props.menuItems.map(function(dataProps){
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



var auth = require("./auth");
var itemApi = require("./api");

module.exports = React.createClass({
  getInitialState: function() {
    return {
     name:'',
     categories:[]
    };
  },

  createItem: function(event){
        console.log('createItem');
	itemApi.addItem(this.refs.title.value, selectedItemId,null);
	event.preventdefault();
},

  componentDidMount: function() {
    $.get("/categories", function(result) {


      console.log(result);
      if (this.isMounted()) {
        this.setState({
          name: "",
	  categories: result
        });
      }
    }.bind(this));
  },

  render: function() {
    
    var cat = this.state.categories;
    var categories = Object.keys(this.state.categories).map(function(dataProps,index){
 	var data = {};
        data['category'] = dataProps;
	data['menuItems'] = cat[dataProps];
	return <MenuCategory {...data}/>
	});
    return (
        <form action="#editItem" onSubmit={this.createItem}>
	    <h2>Enter Creation Name</h2>
	    	<input type="text" name="title" ref="title"></input>
            <h2>Choose Base Drink Category</h2>
            {categories}
	    <h2>Create New Item</h2>
	    <input type="submit" value ="Make New Item"/>
        </form>
        
    );
  }
});
