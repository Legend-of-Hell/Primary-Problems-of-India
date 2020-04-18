//const os = require('os');
//var test = os.hostname();
//console.log(test);
const http = require('http');
const fs = require('fs');
const express = require('express');

const PORT=80; 

fs.readFile('./index.html', function (err, html) {
    if (err) throw err;    
    http.createServer(function(request, response) {  
// console.log(request.url);
// console.log(request.headers);
// console.log(request.method);
console.log(request.addListener.name);
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
    console.log(`Server running at http://127.0.0.1/`);
});     