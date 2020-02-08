const mongoose = require('mongoose'); //importa a dep 'mongoose'
const Produto = mongoose.model('Produto'); //importa a Collection 'Produto'

module.exports = { //permicao para ser importado em outro arq .js

    async index(req, res){
        const { page = 1 } = req.query; //info vem pelo parametro GET(?chave-valor)
        const produtos = await Produto.paginate({}, {page, limit:10});
        return res.json(produtos);
    },

    async show(req, res){
        const produto = await Produto.findById(req.params.id); //info vem pelo parametro GET(/id)
        return res.json(produto);
    },

    async store(req, res){
        const produto = await Produto.create(req.body); //info vem pelo parametro BODY(Corpo)
        return res.json(produto);
    },

    async update(req, res){ //info vem pela parametro GET(/id) e pelo parametro BODY(Corpo)
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(produto);
    },

    async delete(req, res){
        await Produto.findByIdAndRemove(req.params.id); //info vem pelo parametro GET(/id)
        return res.send();
    },
}