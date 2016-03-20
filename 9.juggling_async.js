/**
 * Created by marek on 15.02.16.
 */

var http = require('http');

var result = [];
var count = 0;

function printResult() {
    for (var i = 0; i < 3; i++)
        console.log(result[i])
}

function add(index) {

    http.get(process.argv[2 + index], function (response) {
        response.setEncoding('utf8');

        var body = "";

        response.on('data', function (chunk) {
            body += chunk;
        });
        response.on("end", function () {

            result[index] = (body);

            count++;

            if(count>2){
                printResult()
            }

        });
        response.on('error', console.error);

    });
}

for(i=0; i<3;i++){
    add(i);
}



/*setTimeout(function () {
 console.log(result[0]);
 console.log(result[1]);
 console.log(result[2])
 }, 1000
 );*/
/*

 # PASS Your solution to JUGGLING ASYNC passed!

 Here's the official solution in case you want to compare notes:

 ─────────────────────────────────────────────────────────────────────────────

 var http = require('http')
 var bl = require('bl')
 var results = []
 var count = 0

 function printResults () {
 for (var i = 0; i < 3; i++)
 console.log(results[i])
 }

 function httpGet (index) {
 http.get(process.argv[2 + index], function (response) {
 response.pipe(bl(function (err, data) {
 if (err)
 return console.error(err)

 results[index] = data.toString()
 count++

 if (count == 3)
 printResults()
 }))
 })
 }

 for (var i = 0; i < 3; i++)
 httpGet(i)

 ─────────────────────────────────────────────────────────────────────────────  */
