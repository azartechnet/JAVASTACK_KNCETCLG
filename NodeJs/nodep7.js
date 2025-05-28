var fs=require('fs')
fs.writeFile('sample1.txt',"hello",function(err){
    if(err) {
        console.log(err);
        }
        else{
            console.log("file created");
            }
fs.readFile('sample1.txt',function(err,data){
    if(err) {
        console.log(err);
    }
    else
    {
        console.log(data.toString());
    }
})
})