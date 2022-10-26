
const express = require('express');

const app = express();

app.listen(3080, ()=>{
    console.log('Servidor rodando em: http://localhost:3080');

});

const db = require('./database/database'); 
