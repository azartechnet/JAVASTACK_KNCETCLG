var f1=require('fs')
f1.readFile('f1.txt',function(err,data){
    if(err)throw err;
    else
    {
        console.log(data.toString())
        console.log(data.length)
    }
})