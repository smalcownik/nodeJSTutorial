/**
 * Created by marek on 15.02.16.
 */

var http = require('http');


http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');

    var body="";

    response.on('data', function(chunk){
        body += chunk;
    });
    response.on("end",function(){

        console.log(body.length);
        console.log(body);

    })
    response.on('error', console.error);

    //response.end();
})

/*
 Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

 var http = require('http')
 var bl = require('bl')

 http.get(process.argv[2], function (response) {
 response.pipe(bl(function (err, data) {
 if (err)
 return console.error(err)
 data = data.toString()
 console.log(data.length)
 console.log(data)
 }))
 })

* */