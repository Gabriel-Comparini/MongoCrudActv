import { FastifyReply, FastifyRequest } from "fastify";
import productModel from "../models/eProdModel";

export async function getProducts(request: FastifyRequest<{ Querystring: QueryProduct }>, reply: FastifyReply) {
    try {
        const { cat, minP, maxP, obj, ord } = request.query;

        const filtro: any = {};

        if (cat) {
            filtro.categoria = { $eq: cat };
        }

        if (minP !== undefined || maxP !== undefined) {
            filtro.preco = {};

            if (minP !== undefined) {
                const min = Number(minP);

                if (Number.isNaN(min)) {
                    return reply.status(400).send({
                        erro: "minP deve ser numérico"
                    });
                }

                filtro.preco.$gte = min;
            }

            if (maxP !== undefined) {
                const max = Number(maxP);

                if (Number.isNaN(max)) {
                    return reply.status(400).send({
                        erro: "maxP deve ser numérico"
                    });
                }

                filtro.preco.$lte = max;
            }
        }

        if (obj) {
            filtro.$text = { $search: obj };
        }

        let ordenacao: any = {};

        if (ord === "preco_asc") {
            ordenacao = { preco: 1 };
        } else if (ord === "preco_desc") {
            ordenacao = { preco: -1 };
        }

        const prods = await productModel.find(filtro).sort(ordenacao);

        return reply.status(200).send(prods);

    } catch (error) {
        return reply.status(500).send({
            Erro: `Erro ao tentar listar produtos: ${error}`
        });
    }
}

export async function getProductById(request: FastifyRequest<{ Params: { id: String } }>, reply: FastifyReply) {
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

export async function deleteProduct(request: FastifyRequest<{ Params: { id: String } }>, reply: FastifyReply) {
    try {
        const { id } = request.params;

        const prod = await productModel.findByIdAndDelete(id);

        if (!prod) return reply.status(404).send({
            "Erro": "Produto não encontrado/existente."
        });

        return reply.status(204);
    } catch (error) {
        reply.status(500).send({
            "Error": `Erro ao deletar o produto: ${error}`
        })
    }
}

export async function updateProduct(request: FastifyRequest<{ Params: { id: String } }>, reply: FastifyReply) {
    try {
        
    } catch (error) {
        
    }
}