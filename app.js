const http = require('http'); 
const port = 3000; 
const fs = require ('fs'); 

fs.writeFile('helloworld.txt', 'Hello to this great world!', function(err) {
	if(err) return console.log(err); 
	console.log('Hello this great world!'); 
}); 
  