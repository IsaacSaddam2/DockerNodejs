const express = require('express');
const mongoose = require('mongoose');
const { MONGO_PASSWORD, MONGO_IP, MONGO_PORT, MONGO_USER } = require('./config/config');

const app = express();

//"mongodb://saddam:saddam98@172.22.0.2:27017/?authSource=admin"  //connection string


const connectRetry = () =>{
    const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
    console.log(mongoUrl);
    mongoose
    .connect(mongoUrl)  //connection string  mongo is a servicename in docker-compose file 
    .then(()=>{
        console.log("connected");
    })
    .catch((e)=>{
        console.log(e);
        setTimeout(connectRetry,5000);
    });
}

connectRetry();

app.get('/',(req,res)=>{
    res.send('Hi there u yes u,sorry!');
})
const PORT = process.env.PORT || 3000;    //if port is not set in env file then it will set to 3000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
});

