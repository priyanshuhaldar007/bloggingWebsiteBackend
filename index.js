const express  = require("express");

const  app = express()

app.get('/',(req,res)=>{
    res.send({message:'app successful'});
})

app.listen(8000,()=>{
    console.log('app running on http://localhost:8000');
});