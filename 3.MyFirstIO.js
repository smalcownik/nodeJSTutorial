/*
node 3.MyFirstIO.js /home/marek/WebstormProjects/nodeJSTutorial/readFile.txt
*/


var fs = require('fs');
var arr = process.argv;

var buffer = fs.readFileSync(arr[2]);

var result = buffer.toString();

var res = result.split('\n').length - 1;


console.log(res/*, require.resolve('fs')*/);

