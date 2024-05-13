const http = require("http");
const fs = require("fs")
let port = 8080

const myServer = http.createServer((req , res)=>{
    console.log("Hello from Server");
    const log = `${Date.now()} : req received\n`;
    fs.appendFile("log.txt" , log , (err , data)=>{
        switch(req.url){
            case "/" : res.end("IN THE NAME OF ALLAH");
            break;
            case "/about" : res.end("Aout Us");
            break;
            default :  res.end("Default Url");
        }
        
    })

})

myServer.listen(port , ()=> console.log(`the server at port ${port}`))