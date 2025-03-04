const express=require("express");
const fs=require('fs/promises')
const app=express();
const port =3002;
const users = []

const m1 = (req,res,next)=>{
    const age =req.query.age;
    if(!age){
        res.status(400).send("enter age in Query")
    }
    else{
        if(age<18){
            res.status(401).send("User is not authorized")
        }
        else{
            next();
        }
    }
}


app.use(express.json())

app.get('/users',async(req,res)=>{
    try{
        const data=await fs.readFile('./users.json','utf-8')
        res.status(200).json(JSON.parse(data))
    }
    catch(err){
        res.status(400).send("file not found")
    }
})
app.get('/users/:id',m1,(req,res)=>{
    const uid = req.params.id;
    const idx = users.findIndex(ind=>ind.id==uid)
    if(idx==-1){
        res.status(400).json({status:"fail",message:'User not found'})
    }
    else{
        res.status(200).json({status:"success",message:'User found',data:users[idx]})
        
    }
})
app.post('/createusers',m1,async(req,res)=>{
    const {name,email} = req.body
    const newId =Date.now();
    const newUser = {
        id:newId,name,email
    }
    const data=await fs.readFile('./users.json','utf-8')
    
    users.push(JSON.parse(data));
    users.push(newUser);
    await fs.writeFile("./users.json",JSON.stringify(users))
    res.status(201).json({status:'success',message:'user created successfully',data:newUser})
})
app.patch('/editusers/:id',(req,res)=>{
    const uid = req.params.id
    const {name,email}=req.body
    if(!name || !email){        
        res.status(400).json({status:"fail",message:'all fields required'})
    }
    else{
        
        const idx  =users.findIndex(ind=>ind.id==uid)
        if(idx==-1){
            res.status(400).json({status:"fail",message:'User not found'})
        }
        else{
            users[idx].name = name
            users[idx].email = email
            res.status(201).json({status:'success',message:'user edited successfully',data:users[idx]})
    
        }
    }

})
app.delete('/deleteusers/:id',(req,res)=>{
    const uid = req.params.id;
    const index = products.findIndex(ind=>ind.id==uid)
    if(index==-1){
        res.status(400).json({status:"fail",message:"not found"})
        
    }
    else{
        const deleteData = users.splice(index,1);
        res.status(200).json({status:"success",message:"data deleted sucessfully",data: deleteData})
    }
})

app.listen(port,()=>{
    console.log(`server is runnig on port : ${port}`)
})