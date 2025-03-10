const express = require('express');

const app = express();
require('dotenv').config();

app.get('/', (req, res)=>{

res.send('some thing');

});

app.get('/login', (req, res)=>{

res.send('<h1>hii this is login page</h1>');
    
 });

const port = 4000;

app.listen(process.env.PORT, ()=>{

console.log(`http://localhost:${process.env.PORT}`)

})