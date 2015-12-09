var https = require('https');

exports.getMenu = function(cb){
console.log("Pulling Menu");
var menuJson = "";
var options = {
  method: 'get',
  port: 443,
  path: '/ioms/api/menu/',
  host: "fiizbountiful.spfsolutions.biz",
  headers : { "Content-Type": "application/json", "Accept": "application/json", "Authorization": "Basic bToxMjM0NTY=", "Host": "fiizbountiful.spfsolutions.biz"}
};
var req = https.request(options, function(res) {
    console.log("statusCode: ", res.statusCode);
    console.log("headers: ", res.data);
 //   res.setHeader('content-type', 'application/json');
    res.on('data', function(d) {
    
    menuJson+=d;
    });
    res.on('end', function() {
 	console.log(menuJson);
	cb(menuJson);
       //httpRes.send(data);
    });

});


req.end();
}
