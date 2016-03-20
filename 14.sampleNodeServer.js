/**
 * Created by marek on 04.03.16.
 */
var http = require('http');
var jsonFile = require('/home/marek/WebstormProjects/nodeJSTutorial/JSON_sample.json');

var res,req;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello New York\n');

    //console.log(res);
    random(res);
    //res.end();

}).listen(3001);
console.log('Server running at http://localhost:3001/');


/*var http = require('http');
var res,req;
http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "application/json"});
    var otherArray = ["item1", "item2"];
    var otherObject = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({
        anObject: otherObject,
        anArray: otherArray,
        another: "item"
    });
    res.end(json);

}).listen(3001);
console.log('Server running at http://localhost:3001/');*/



function random(response) {
    console.log("Request handler random was called.");
    //response.writeHead(200, {"Content-Type": "application/json"});
    var otherArray = ["item1", "item2"];
    var otherObject = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({
        anObject: otherObject,
        anArray: otherArray,
        another: "item"
    });

   var parsed = JSON.parse(json);

    console.log(parsed);
    console.log(jsonFile);


    response.end(json);
}
