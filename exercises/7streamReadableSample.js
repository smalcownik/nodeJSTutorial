/**
 * Created by marek on 13.02.16.
 */
/*var readable = require("stream").Readable;

var rs = new readable;
rs.push("dupa ");
rs.push("lampa \n");
rs.push(null);


rs.pipe(process.stdout);*/

//process.stdout;

/*var Readable = require('stream').Readable;
var rs = Readable();

var c = 97;
rs._read = function () {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) rs.push(null);
};

rs.pipe(process.stdout)*/

/*var Readable = require('stream').Readable;
var rs = Readable();

var c = 97 - 1;

rs._read = function () {
    if (c >= 'z'.charCodeAt(0)) return rs.push(null);

    setTimeout(function () {
        rs.push(String.fromCharCode(++c));
    }, 0);
};

rs.pipe(process.stdout);

process.on('exit', function () {
    console.error('\n_read() called ' + (c - 97) + ' times');
});
process.stdout.on('error', process.exit);*/


/*var Writable = require('stream').Writable;
var ws = Writable();
ws._write = function (chunk, enc, next) {
    console.dir(chunk);
    next();
};

process.stdin.pipe(ws);*/
var http =require('http');

/*
var options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST'
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();*/
http.get("http://www.google.com/index.html", function(res) {
    console.log("Got response: " + toString.statusCode);
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});