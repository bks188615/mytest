var fs = require('fs');
fs.readFile("./01.txt",'Utf-8',(err,data)=>{
    console.log(data)
})