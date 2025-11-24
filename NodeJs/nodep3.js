var f1=require('fs')
f1.open('f1.txt',function(err,data){
    if(err)throw err;
    else{
        console.log("FileOpended..")
    }
})