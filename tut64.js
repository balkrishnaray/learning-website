const fs = require("fs");
let text = fs.readFileSync("hello.txt", "utf-8");
text = text.replace("balkrishna", "Amish");
console.log("The content of file is");
console.log(text);
console.log("Creating a new file");
fs.writeFileSync("hello1.txt",text);