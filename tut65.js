//synchronous and blocking
// - line by line execution

// asynchronous and non blocking
// - line by line blocking not guaranteed
// call back will fire

const fs = require('fs');
let text = fs.readFile("hello.txt","utf-8", (err,data)=>{
    console.log(data);
});
console.log("This is a message");