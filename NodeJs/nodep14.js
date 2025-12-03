var fs=require('fs')
var readStream=fs.createReadStream('sample1.txt')
readStream.on('open',function(){
    console.log("FileOpeaned..")
})