const express = require('express'); //importa a dep 'express'
const mongoose = require('mongoose'); //importa a dep 'mongoose'
const requireDir = require('require-dir'); //importa a dep 'require-dir'
const cors = require('cors'); //importa a dep 'cors'

//Iniciando App Express
const app = express();
app.use(express.json()); //permite receber requisoções JSON
app.use(cors()); //permite acesso externo

//Iniciando BD
mongoose.connect(
    "mongodb://localhost:27017/myapp",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
requireDir('./src/modelo'); //importa todos os modelos para APP manipular

//Inciando Rotas
app.use("/api", require("./src/rotas")); //define um rota coringa integrado a uma function middleware


//Inciando Porta
app.listen(2000); //define porta de comunicacao do APP