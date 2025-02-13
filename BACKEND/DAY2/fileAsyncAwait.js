const fs=require('fs/promises');
async function myreadFile(){
    try{
        const res = await fs.readFile('dummy.txt','utf-8');
        console.log('file data',res);

    }
    catch(err){
        console.log('file reading error',err.message);
    }
}
async function mywriteFile(data){
    try{
        await fs.writeFile('dummy.txt',data);
        console.log('file data');

    }
    catch(err){
        console.log('file writing error',err.message);
    }
}
myreadFile();
const data = 'Vipul';
mywriteFile(data)