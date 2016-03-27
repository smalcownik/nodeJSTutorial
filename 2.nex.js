/*wypisuje sumę liczb, trzeba podać dowolną liczbę argumentów -liczb do dodania*/

var arr = process.argv;// są to poszczególne elementy wywołania funkcji: $ node 2.nex.js 4  1 23 2342 343 232 2 2


var result =0;

for(var i =2; i<arr.length; i++){  // pomija dwa pierwsze elementy - "node" i "2.nex.js"

result += Number(arr[i]);

};


console.log(result);
