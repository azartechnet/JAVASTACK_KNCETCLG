// setInterval(()=>{
//     console.log("Welcome")
// },2000)

const intervalid=setInterval(()=>{
    console.log("This is Keep Running..")
},1000)

setTimeout(()=>{
    clearInterval(intervalid)
    console.log("Interval Stopped..")
},5000)

