/**
 * Created by marek on 16.02.16.
 */
var net = require('net');

var now =  function(){return new Date()};



function month(){var m = now().getMonth()+1; // miesiąc w getMonth zaczyna sie od zera !!

if (m<10){
    m = "0"+m;
};
    return m;
}

function minute(){var m = now().getMinutes();

    if (m<10){
        m = "0"+m;
    };
    return m;
}


//console.log("\""+now().getFullYear()+"-"+month()+"-"+now().getDate() +" "+now().getHours()+":"+minute()+"\"");



var server = net.createServer(function(socket) { //'connection' listener
   // console.log('client connected');

   // console.log(/!*dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"),*!/dateFormat(now, "yyyy-mm-dd h:MM:ss"));
    socket.on('end', function() {
        console.log('client disconnected'); //działa!
    });
    //socket.write('hello\r\n');

    //socket.write( now().getFullYear()+"-"+month()+"-"+now().getDate() +" "+now().getHours()+":"+minute()+"\n");// tak też jest dobrze,
    // ale wersja z socket.end(now()) jest krótsza (4 linijki niżej)

    //c.pipe(c);
    socket.end(now().getFullYear()+"-"+month()+"-"+now().getDate() +" "+now().getHours()+":"+minute()+"\n");
});
server.listen(process.argv[2], function() { //'listening' listener
    //console.log('server bound');
});

/*

var net = require('net')

function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
}

function now () {
    var d = new Date()
    return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
}

var server = net.createServer(function (socket) {
    socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))  */
