const http = require("http"),;
const fs = require("fs");

http.createServer(=>(req,res){
    fs.readFile("./index.html",=>(err,html){
        res.write(html);
        res.end();
    });
}).listen(8080);

