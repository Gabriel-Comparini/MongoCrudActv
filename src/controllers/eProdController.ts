import { FastifyReply, FastifyRequest } from "fastify";
import productModel from "../models/eProdModel";

export async function getProducts(request: FastifyRequest, reply: FastifyReply) {
    try {
        
    } catch (error) {
        
    }
}

export async function getProductById(request: FastifyRequest<{ Params: { id: Number } }>, reply: FastifyReply) {
    try {
        const { id } = request.params;

        const prod = await productModel.findById(id);

        if (!prod) return reply.status(404).send({
            "Erro": "Produto não encontrado/existente."
        });

        return reply.status(200).send(prod);
    } catch (error) {
        reply.status(500).send({
            "Error": `Erro ao consultar o produto pelo id: ${error}`
        })
    }
}

export async function createProduct(request: FastifyRequest<{ Body: ProductBody }>, reply: FastifyReply) {
    try {
        const { nome, preco, categoria, estoque } = request.body;

        const newProd = new productModel({
            nome,
            preco,
            categoria,
            estoque
        });

        await newProd.save();
        return reply.status(201).send({
            "Sucesso": "Produto salvo com êxito."
        });
    } catch (error) {
        reply.status(500).send({
            "Error": `Erro ao criar o produto: ${error}`
        })
    }
}

export async function deleteProduct(request: FastifyRequest<{ Params: { id: Number } }>, reply: FastifyReply) {
    try {
        const { id } = request.params;

        const prod = await productModel.findByIdAndDelete(id);

        if (!prod) return reply.status(404).send({
            "Erro": "Produto não encontrado/existente."
        });

        return reply.status(204).send({
            "Sucesso": "Produto deletado com êxito."
        });
    } catch (error) {
        reply.status(500).send({
            "Error": `Erro ao deletar o produto: ${error}`
        })
    }
}

export async function updateProduct(request: FastifyRequest<{ Params: { id: Number } }>, reply: FastifyReply) {
    try {
        
    } catch (error) {
        
    }
}