/**
 * Created by marek on 19.02.16.
 */
var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){


   /* if(req.method === 'GET')
        console.log("get !");*/

    //console.log(req.url);


    var requestObject = url.parse(req.url,true);
        //console.log(requestObject.pathname);

    var currDate = requestObject.query.iso;

    var dateObject = makeDateObject(currDate); //console.log(dateObject); //to już działa dobrze
    var unixDateObject= makeUnixtimeObject(currDate);


    if (requestObject.pathname === '/api/unixtime') {
        result =unixDateObject ;
    }
    else if (requestObject.pathname === '/api/parsetime') {
        result = dateObject;
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.write(JSON.stringify(result));

        res.end();

        //res.end(JSON.stringify(result)); // to jest drugie
        // równorzędne zastąpienie dwu poprzednich linijek
    }
    else {
        res.writeHead(404);
        res.end();
    }




}).listen(process.argv[2]);

//todo: jakos te wyniki trzeba wrzucić w ten url i ten url  w response- but how ?!

function makeUnixtimeObject(isoFormatDate){

    var date = new Date(isoFormatDate);

    var returnObj= {
        unixtime:date.getTime()
    }

    return returnObj
}

function makeDateObject(isoFormatDate){


    var returnObj = {
        hour:Number(isoFormatDate.slice(11,13))+1,
        minute : Number(isoFormatDate.slice(14,16)),
        second : Number(isoFormatDate.slice(17,19) )};

    return returnObj
}

/*

Here's the official solution in case you want to compare notes:

─────────────────────────────────────────────────────────────────────────────

var http = require('http')
var url = require('url')

function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime (time) {
    return { unixtime : time.getTime() }
}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    var result

    if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
    else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))  */


/*
var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
    var urlObject = url.parse(request.url,false,true);
    var time = new Date(urlObject.query.split('=')[1]);
    var obj = '';
    if (urlObject.pathname=="/api/parsetime"){
        obj = '{"hour":'+time.getHours()+',"minute":'+time.getMinutes()+',"second":'+time.getSeconds()+'}';
    }
    if (urlObject.pathname=="/api/unixtime") obj = '{"unixtime":'+time.getTime()+'}';

    response.writeHead(200,{'Content-type':'application/json'});
    response.write(obj);
    response.end();
});
server.listen(Number(process.argv[2]));*/
