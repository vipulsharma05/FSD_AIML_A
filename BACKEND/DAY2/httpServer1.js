const http=require('http');
const server = http.createServer((req,res)=>{
    const url=req.url;
    if (url=='/home' && req.method=='GET'){
        res.write('<h1>Home Page</h1>')
    }
    else if(url==='/about' && req.method=='POST'){
        res.write('<h1>About Page</h1>')
    }
    else{
        res.write('<h1>Error Page</h1>')
    }
    res.end();

});
server.listen(3001,()=>{
    console.log('Server is running at port 3001');
})