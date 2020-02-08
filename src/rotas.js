const express = require('express'); //importa a dep 'express'
const rotas = express.Router(); //obtem um obj para criaçao de rotas;

const ProdutoControle = require('./Controle/ProdutoControle'); //importa o .js Controler

rotas.get('/produto', ProdutoControle.index); //cria o roteamento e associa AsyncFunciton para realizar a acao
rotas.get('/produto/:id', ProdutoControle.show); //cria o roteamento e associa AsyncFunciton para realizar a acao
rotas.post('/produto', ProdutoControle.store); //cria o roteamento e associa AsyncFunciton para realizar a acao
rotas.put('/produto/:id', ProdutoControle.update); //cria o roteamento e associa AsyncFunciton para realizar a acao
rotas.delete('/produto/:id', ProdutoControle.delete); //cria o roteamento e associa AsyncFunciton para realizar a acao

module.exports = rotas; //permicao para ser importado em outro arq .js