var fs=require('fs')
var data="Java"
fs.appendFile("sample.txt",data,function(err){
    if(err) {
        console.log(err);
    }
    else
    {
        console.log("Data is Appended")
    }
})