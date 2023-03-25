const fs=require('fs')
const http=require('http')
const Name=process.env.username
const content=`<h1> Hello World </h1>
<p> This is ${ Name}... </p>`
fs.writeFile('index.html',content,(err)=>{
  if(err){
    console.log("plz check err")
  }
  console.log('File is Created')
})
const server=http.createServer((req,res)=>{
  fs.readFile('./index.html',(err,data)=>{
    if(err){
      res.writeHead(404);
      res.end('Page is Not Found')
    }
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data)
    res.end()

  })
})
server.listen(3000,()=>{
  console.log("Server listening on Port 3000")
})
 
