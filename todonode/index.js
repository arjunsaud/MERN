const express = require('express');

const app = express()

app.use(express.json({urlencoded:true}))

let TODO=[]

app.get('/todo',(req,res)=>{
    return res.status(200).json({todo:TODO})
})

app.post("/todo",(req,res)=>{
    const todo=req.body
    console.log(req.body);
    TODO.push(todo)
    return res.status(200).json({
        "message":"todo saved"
    })
})


app.listen(8000,()=>{
    console.log("server running on port 8000")
})