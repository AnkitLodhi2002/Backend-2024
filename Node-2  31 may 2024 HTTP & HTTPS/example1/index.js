const http = require("http");
const server = http.createServer((req, res)=>{
    if(req.url==="/Data"){
        console.log("Random Page");
        res.end("Hello, Random Page")
    }else if(req.url==="/About"){
        console.log("About Page");
        res.end("Hello, About Page")
    }else if(req.url==="/Home"){
        console.log("Home Page")
        res.end("Hello, Home page ")
    }else if(req.url==="/Profile"){
        console.log("Profile page")
        res.end("Hello, Profile Page")
    }else if(req.url==="/Contact"){
        console.log("Contact Page")
        res.end("Hello, Contact Page")
    }
})

server.listen(3000,()=>{
    console.log("Runnig");
})