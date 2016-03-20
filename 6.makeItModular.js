
var fs = require('fs');
var path = require('path');

module.exports = function (dir, extent, callback) {



    /*var arr = process.argv;

     console.log(arr);*/


    fs.readdir(dir/*process.argv[2]*/, function (err, list) {

        if (err) {
            return callback(err);
        }

        else {
            var lista = [];
            for (var i = 0; i < list.length; i++) {

                var extention = path.extname(list[i]);

                if (extention === ("." + extent /*process.argv[3]*/)) {
                    lista.push(list[i]);

                }

            }

            callback(null, lista);

        }


    });

};




