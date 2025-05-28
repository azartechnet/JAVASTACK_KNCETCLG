var f1=require('fs')
f1.open('f2.txt',function(err,data){
    if(err) console.log(err)
    else
{
    console.log("FileOpened");
}
})