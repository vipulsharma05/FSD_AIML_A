const fs=require('fs');

function myreadFile(){
try{
    fs.readFile("dummy.txt","utf-8",(err,data)=>{
        if(err) throw err;
        console.log('file data',data)
    });
}
catch(err){
    console.log('File Reading error',err.message);

}
}
function mywritefile(data){
    try{
        fs.writeFile('dummy.txt',data,(err)=>{
            if(err) throw err;
            console.log("successfully write file")
        });

    }
    catch(err){
        console.log("file writing error",err.message);
    }
}
myreadFile();
const data="sarthak mota hai";
mywritefile(data);
myreadFile();