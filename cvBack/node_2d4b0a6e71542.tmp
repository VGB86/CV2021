const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const cors = require('cors')

const mongoose = require ('mongoose')
const db = require('./db');

const apiRouter = require('./routes/api')

require('dotenv').config();
app.use(cors());

app.use(bodyParser.json())

app.use('/api',apiRouter)
db.conectarBBDD(arrancarServidor)

function arrancarServidor(){
    const PORT = process.env.PORT || 3333;
    app. listen(PORT,()=>{
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
}



