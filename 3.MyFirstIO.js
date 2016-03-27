/*
node 3.MyFirstIO.js /home/marek/WebstormProjects/nodeJSTutorial/readFile.txt
*/


var fs = require('fs');
var arr = process.argv;

var buffer = fs.readFileSync(arr[2]); // trzeci argument funkcji ma być ścieżką do pliku tekstowego

var result = buffer.toString();

var res = result.split('\n').length - 1; // robi ze stringu tablicę elementów, kolejny element zaczyna się od miejsca w pliku tekstowym nowej linii
// i zwraca dłogość tej tablicy (czyli ilość wierszy pliku tekstowego)


console.log(res/*, require.resolve('fs')*/);

