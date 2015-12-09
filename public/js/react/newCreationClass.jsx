var React = require('react');
var MenuCategory = require('./menuCategory');
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth");
var itemApi = require("./api");

module.exports = React.createClass({
  getInitialState: function() {
    return {
     name:'',
     categories:[]
    };
  },

  createItem: function(){
	itemApi.addItem(this.refs.title.value, this.refs.itemId.value,null);
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
        <form action="./api/creation/" onSubmit={this.createItem}>
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
