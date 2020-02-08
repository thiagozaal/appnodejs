const mongoose = require('mongoose'); //importa a dep 'mongoose'
const mongoosePaginate = require('mongoose-paginate'); //permite paginar os resultado

const ProdutoSchema = new mongoose.Schema({ //criar os campos e define seus valores
    titulo:{
        type: String,
        required: true,
    },
    descricao:{
        type: String,
        required: true,
    },
    url:{
        type: String,
        required: true,
    },
    dataReg:{
        type: Date,
        default: Date.now,
    }
});
mongoose.plugin(mongoosePaginate); //commit para paginaçao
mongoose.model('Produto', ProdutoSchema); //cria uma Collection 'Produto' no BD