
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
const mywriteFile=(data)=>{
    try{
        const res = fs.writeFile('dummy.txt',data);
        res.then(()=>{
            console.log('Successfully');
        })
        .catch((err)=>{
            throw err;
        })
    }
    catch(err){
        console.log('file writie error:',err.meesge);
    }
}

myreadFile();
const data  ='fulle stack deve';
mywriteFile(data);