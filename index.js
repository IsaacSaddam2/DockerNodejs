const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose
// .connect("mongodb://saddam:saddam98@172.22.0.2:27017/?authSource=admin")  //connection string 
.connect("mongodb://saddam:saddam98@mongo:27017/?authSource=admin")  //connection string  mongo is a servicename in docker-compose file 
.then(()=>{
    console.log("connected");
})
.catch((e)=>{
    console.log(e);
});

app.get('/',(req,res)=>{
    res.send('Hi there u yes u,sorry!');
})
const PORT = process.env.PORT || 3000;    //if port is not set in env file then it will set to 3000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
});

