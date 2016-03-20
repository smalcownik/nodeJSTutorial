var fs =require('fs');
var arr = process.argv;

fs.readFile(arr[2], function callback(err, buffer){

result = buffer.toString().split('\n').length -1;

console.log (result);

} );


//console.log(res);
