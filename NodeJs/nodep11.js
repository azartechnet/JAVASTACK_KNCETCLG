const timeoutid=setTimeout(()=>{
    console.log("This is will not run")
},5000)

setTimeout(()=>{
    clearTimeout(timeoutid)
    console.log("Timeoutcleared")
})