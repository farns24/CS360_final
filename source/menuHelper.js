module.exports.getCategories= function(rawResult)
{
    var result = JSON.parse(rawResult);
    categories = {};
    for (var i = 0; i<result.menus.length; i++)
    {
       var menus = result.menus[i];
       if (menus==null)
	{
	    continue;	
	}
       //console.log(menus);
       for (var j = 0;j< menus.menuItems.length; j++)
        { 
	    
            var menuItem = menus.menuItems[j];
	    //console.log(menuItem);
            //console.log(j);
            if (menuItem.category==null)
	    {
 		menuItem.category = "Other";
            }
		
            if (categories[menuItem.category]==null)
            {
                categories[menuItem.category] = [];
            }
		//console.log("pushing item to category");
		//console.log(menuItem);
		//console.log(menuItem.category);
                categories[menuItem.category].push(menuItem);
		//console.log(categories);
        }
       
    }
    return categories;
}

