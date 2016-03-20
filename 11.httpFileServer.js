/**
 * Created by marek on 17.02.16.
 */
var http = require("http");
var fs = require("fs");

var port = process.argv[2];
//var port = Number(process.argv[2]);

var path = process.argv[3];

var server = http.createServer(function(request, response){
    var file = fs.createReadStream(path);


    //var file = fs.createReadStream("readFile.txt"); // wyświetla zawartość pliku gdy tego użyjemy


   file.pipe(response); // plik file zostaje zapisany w response i


    //console.log(response);

    //response.on('end',function(){console.log("a")}); //  to NIC nie robi !!

});

server.listen(Number(port)); // nie wiem o co chodzi z tym numerem, co to kur.. jest za numer



/*# PASS Your solution to HTTP FILE SERVER passed!

    Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })

    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))
   */
