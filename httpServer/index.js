const http = require("http");
const fs = require("fs");


const jsonData = fs.readFileSync(`${__dirname}/userapi/userapi.json`, "utf-8");     // json Data
// const orgData = JSON.parse(jsonData);            //json data conversion in js object format

const server = http.createServer((req,res) => {
    if(req.url == "/"){                             //routing
        res.end("This is NodeJS Server")
    }                                                    
    else if(req.url == "/userapi"){
        res.end(jsonData)
    }
    else {
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("<h1>Error 404, Page dosn't exist</h1>");
    }

})

server.listen(8000, '127.0.0.1', ()=>{console.log("Server is running at port 8000");});