
const express = require('express');

const app = express();

app.use(express.json()); 

app.listen(3000, ()=>{
    console.log('Servidor rodando em: http://localhost:3080');

});

const db = require('./database/database'); 

    