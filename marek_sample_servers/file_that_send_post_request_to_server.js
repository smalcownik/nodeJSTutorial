/*** Created by marek on 03.05.16.*/


var b = {dupa:["xx","y","z"],
    lampa :5,
    cipa : function(a) {
        return (a+15);
    },
    cos :"cos"
    };

var json = JSON.stringify(b);

console.log(json);



var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "http://localhost:8000/");
xmlhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");

/*xmlhttp.onload = function(){ console.log("as as asas a");};*/ // to też może byc ale bez tego działa

xmlhttp.send(json);