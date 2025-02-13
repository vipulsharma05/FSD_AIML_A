
const fs=require('fs/promises');
function myreadFile(){
    try{
        const res=fs.readFile('dummy.txt','utf-8');
        res.then((data)=>{
            console.log("file data",data)
        })
        .catch((err)=>{
            throw err;
        })
    }
    catch(err){
        console.log('File Reading error:',err.messgae);
    }
}
myreadFile();