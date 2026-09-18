import mongoose from "mongoose";

const productModelSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }, 

    descricao: {
        type: String,
        default: ""
    }, 

    preco: {
        type: Number,
        required: true
    },

    categoria: {
        type: String,
        required: true
    },

    estoque: {
        type: Number,
        required: true
    },

    especificacoes: {
        type: Object,
        default: {}
    }
});

productModelSchema.index({
    nome: "text",
    descricao: "text"
});

const productModel = mongoose.model("Product", productModelSchema);

export default productModel;