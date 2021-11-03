const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('Hi there u yes u,sorry!');
})
const PORT = process.env.PORT || 3000;    //if port is not set in env file then it will set to 3000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
});

