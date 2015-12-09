var React = require('react');

var Hello = React.createClass({displayName: "Hello",
    render: function() {
	return React.createElement("h1", null, 
		"Hello world"
		)
	
	}


});

/**
Grid Item menu

*/
var ItemMenu = React.createClass({displayName: "ItemMenu",
    render: function() {
	return (
	React.createElement("div", {className: "creationGridItemMenu"}, 
     	 	React.createElement("a", {href: "/creation/1"}, "Item Details"), 
        	React.createElement("a", {href: "/order/1"}, " Order Now")
	)
	);
	}

});


/**
Popular Item
*/
var Browse = React.createClass({displayName: "Browse",
  render: function() {
    return (
    React.createElement("div", {className: "creationGridItem"}, 
        React.createElement("img", {src: "/public/image/cherry.svg", className: "creationGridItemImage"}), 
	React.createElement("a", {href: "/creation/"}, 
		this.props.itemName
	), 
	React.createElement(ItemMenu, null)
    )
    );
  }
});

var BrowseList = React.createClass({displayName: "BrowseList",
   render: function() {
	
	
		var list = this.props.data.map(function(dataProps){
	return React.createElement(Browse, React.__spread({},  dataProps))

	});
	return (
	React.createElement("div", null, list)
	);
	
    }
});



var options = {
  data :[{ itemName : 'Test Item'},{itemName : 'Test Item 2'}]
};

var browse_el = React.createElement(BrowseList, options);

ReactDOM.render(popular_el,
  document.getElementById('browseList')
);

try{

var HeaderClass = React.createClass({displayName: "HeaderClass",
    render: function(){
	return (
	React.createElement("header", null, 
		React.createElement("ul", null, 
		  React.createElement("li", {className: "top"}, React.createElement("h1", null, "SPFCreations")), 
		  React.createElement("li", {className: "top"}, React.createElement("a", {id: "topHome", className: this.props.homeClass, href: "/public/html/home.html"}, "Home")), 
		  React.createElement("li", {className: "top"}, React.createElement("a", {id: "topPopular", className: this.props.popularClass, href: "/public/html/popular.html"}, "Most Popular")), 
		  React.createElement("li", {className: "top"}, React.createElement("a", {id: "topBrowse", className: this.props.browseClass, href: "/public/html/browse.html"}, "Browse")), 
		  React.createElement("li", {className: "top"}, React.createElement("a", {id: "topLogin", className: this.props.loginClass, href: "/public/html/login.html"}, "Login"))
		)
	)

		);
	}

});

var popularOptions = {
		homeClass:"topBar",
		popularClass:"topSelected",
		browseClass: "topBar",
		loginClass: "topBar"	
		};

var browseOptions = {
		homeClass:"topBar",
		popularClass:"topBar",
		browseClass: "topSelected",
		loginClass: "topBar"	
		};


var popularHeader = React.createElement(HeaderClass,popularOptions);
var browseHeader = React.createElement(HeaderClass,browseOptions);


var headerDOM = document.getElementById('popularHeader');
if (headerDOM!=null)
{
	ReactDOM.render(popularHeader,
	 headerDOM 
	);
}


	var browseDOM = document.getElementById('browseHeader');
	if (browseDOM!=null)
	{
		ReactDOM.render(browseHeader,
		  browseDOM
		);
	}
}
catch(err)
{
	console.log(err.message);

}




/**
Grid Item menu

*/
var ItemMenu = React.createClass({displayName: "ItemMenu",
    render: function() {
	return (
	React.createElement("div", {className: "creationGridItemMenu"}, 
     	 	React.createElement("a", {href: "/creation/1"}, "Item Details"), 
        	React.createElement("a", {href: "/order/1"}, " Order Now")
	)
	);
	}

});


/**
Popular Item
*/
var Popular = React.createClass({displayName: "Popular",
  render: function() {
    return (
    React.createElement("div", {className: "creationGridItem"}, 
        React.createElement("img", {src: "/public/image/cherry.svg", className: "creationGridItemImage"}), 
	React.createElement("a", {href: "/creation/"}, 
		"//", this.props.itemName, 
		"Test"
	), 
	React.createElement(ItemMenu, null)
    )
    );
  }
});

var PopularList = React.createClass({displayName: "PopularList",
    componentDidMount: function() {

	$.get(this.props.source, function(results){
		   console.log(results);
		   this.props.data = results;
		});	
	},
   render: function() {

		var list = this.props.data.map(function(dataProps){
	return React.createElement(Popular, React.__spread({},  dataProps))

	});
	return (
		React.createElement("div", {className: "col-md-10 col-xs-6"}, list)
	);
	
    }
});



var options = {
  source:'/menu'
};

var popular_el = React.createElement(PopularList, options);

var popularDOM = document.querySelector('.myPopularListR');//document.getElementById('myPopularListR');

if (popularDOM!=null)
{

ReactDOM.render(popular_el,
  popularDOM
);
}



console.log('side Menu Rendered');
var SideMenuClass = React.createClass({displayName: "SideMenuClass",
    render: function(){
		return(
		    React.createElement("div", null, 
			React.createElement("a", {className: "sideMenuItem"}, "Make Creation"), React.createElement("br", null), 
		        React.createElement("a", {className: "sideMenuItem"}, "Manage my Creations")
		    )
		);
	}

});


var sideMenu = React.createElement(SideMenuClass);

var sideBarDOM = document.getElementById('mySideMenuR');
if (sideBarDOM!=null)
{
ReactDOM.render(
	sideMenu,
	sideBarDOM
	
);
}

