http = require("http");
var fs = require("fs");
var map = require('through2-map');

//var buffer = fs.readFileSync("readFile.txt");
//var result = buffer.toString();

//var file = fs.createReadStream("readFile.txt");
/*var truncate = map(function (chunk) {
    return chunk.slice(0, 10)
})*/

var pr3= process.argv[3];

//TODO: spróbować jeszcze http.request


var server = http.createServer(function(request, response){

    if(request.method === 'POST')
        console.log("post !");

    //var file = fs.createReadStream(pr3);

request.pipe(map(function (chunk) { // przy post nie trzeba używać FS żeby przesłać zawartość
    //console.log(chunk);
    return chunk.toString().toUpperCase();
})).pipe(response);


    //file.pipe(response);




});




server.listen( process.argv[2]/*,{
    method: 'POST'
}*/);


/*
Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

var http = require('http')
var map = require('through2-map')

var server = http.createServer(function (req, res) {
    if (req.method != 'POST')
        return res.end('send me a POST\n')

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})

server.listen(Number(process.argv[2])) */
