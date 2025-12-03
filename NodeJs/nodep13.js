function greet()
{
    console.log("Helloworld")
}
const timeoutId=setTimeout(greet,2000)
function cancelTimeout()
{
    clearTimeout(timeoutId)
    console.log("Timeout has been cleared")
}
setTimeout(cancelTimeout,5000)
console.log("This Message appears immed...")