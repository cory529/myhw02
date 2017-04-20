var http = require('http');
var request = require('request');

http.createServer(function(req, res) {
	request.post({
	url: "http://ycchen.im.ncnu.edu.tw/join.php",
	form:{
		"name": "Godri"
	}
	}, function(error, response, body){
		res.writeHead(200,{'Content-Type': 'text/html'});
    	res.write(body);
    	res.end(); 	
	});   
}).listen('7774','127.0.0.1');

