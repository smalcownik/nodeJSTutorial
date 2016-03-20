function doWor(err,list){

    if(err){
        console.log("err")
    }

    for(var i =0; i< list.length;i++){

        var extention = path.extname(list[i]);

        if(extention === ("."+extent/*process.argv[3]*/)){
            console.log(list[i]);
        }

    }
}