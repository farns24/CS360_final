var React = require('react');
var ReactRouter = require("react-router");
var History = ReactRouter.History;

var auth = require("./auth");
var api = require('./api');
var BrowseItem = require('./browseEditItem');


module.exports = React.createClass({
	getInitialState: function(){
		return {
			myItems:[]		
			};
	},
	componentDidMount:function(){
	var self = this;
	api.getItems(function(success,res){
		 if (self.isMounted()) {
        		self.setState({
		 		 myItems: res.items
        		});
      		}
	})

	},

	render: function(){
	var items = this.state.myItems.map(function(dataProps){
					return <BrowseItem {...dataProps}/>

				});
	return(<div><h2>My creations</h2>{items}</div>);
	}


});
