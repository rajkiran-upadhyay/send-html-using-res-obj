const http=require("http")//import http module

const server=http.createServer((req,res)=>{//create a server by passing a listener function that accepts req and res object
  const url=req.url;
  if(url==='/'){
    res.setHeader("Content-Type","text/html");
    res.write('<html>')
    res.write('<head><title>first page</title></head>')
    res.write('<body><h1>first page</h1></body>');
    res.write('</html>')
   return res.end()

  }
  res.setHeader("Content-Type","text/html");
  res.write('<html>')
  res.write('<head><title>second page</title></head>')
  res.write('<body><h1>second page</h1></body>');
  res.write('</html>')
})

server.listen(4000,()=>{//start listening
  console.log("server is running")
})