const EventEmitter=require('events')
var e2=new EventEmitter()
e2.on('myEvent',function(){
    console.log('myEvent emitted')
})
e2.emit('myEvent')