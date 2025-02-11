
const fs=require('node:fs');
function myreadFile(){
try{
    const data=fs.readFileSync('dummy.txt',"utf-8");
    if(data){
        console.log('file data',data);
    }else
    throw err;


}
catch(err){
    console.log('File Error',err.message);
}
}
function mywritefile(data){
    try{    
        // const data='hello kya haal hai tere?'
    fs.writeFileSync('dummy.txt',data);
    }
    catch(err){
        console.log('File Writing Error',err.meesgae);
    }
}
// myreadFile()
// mywritefile()
// myreadFile()
module.exports={myreadFile,mywritefile,username:'vipul'};