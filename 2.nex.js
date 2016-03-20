/*wypisuje sumę liczb, trzeba podać dowolną liczbę argumentów -liczb do dodania*/

var arr = process.argv;

var result =0;

for(var i =2; i<arr.length; i++){

result += Number(arr[i]);

};


console.log(result);
