var $ = require("jquery");

var eItem = {
   setEditedItem:function(editedItem){
	localStorage.editedItem = editedItem;

},


   getEditedItem:function(){

	return localStorage.editedItem;
  }


};

module.exports = eItem;
