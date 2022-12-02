const http = require("http");
const fs = require("fs");

const PORT = 800;
const hostname = "localhost";

const home = fs.readFileSync("./index.html");

const server = http.createServer((req,res)=>{
    
    // console.log(req.url);

    if(req.url === "/"){
        return res.end(home);
    }
    if(req.url === "/about"){
        return res.end("<h1>About</h1>");
    }
    if(req.url === "/contact"){
        return res.end("<h1>Contact Page</h1>");
    }
    if(req.url === "/service"){
        return res.end("<h1> Service </h1>");
    }
    else{
        return res.end("<h1>404 page not found</h1>");
    }
    res.end("<h1>Hellnkncko</h1>");
});


server.listen(PORT,hostname,()=>{
    console.log(`Server is working on http://${hostname}:${PORT})`);
});