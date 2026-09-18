import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/eProdController";

const eProdRoutes = (app: FastifyInstance) => {
    // Só pra ver se ta funfando :P
    app.get("/health", 
        async (request: FastifyRequest, reply: FastifyReply) => {
            reply.send({
                "Status": "Yah, it is working for sure."
            });
        }
    );

    app.get("/products", 
        async (request: FastifyRequest<{ Querystring: QueryProduct }>, reply: FastifyReply) => await getProducts(request, reply)
    );
    
    app.get("/products/:id", 
        async (request: FastifyRequest<{ Params: { id: String } }>, reply: FastifyReply) => await getProductById(request, reply)
    );

    app.post("/products", {
        schema: {
            body: {
                type: 'object',
                properties: {
                    nome: { type: 'string' },
                    preco: { type: 'number' },
                    categoria: { type: 'string' },
                    estoque: { type: 'number' }
                },
                required: ['nome', 'preco', 'categoria', 'estoque']
            }
        }
    }, async (request: FastifyRequest<{ Body: ProductBody }>, reply: FastifyReply) => 
        await createProduct(request, reply)
    );

    app.patch("/products/:id", 
        async (request: FastifyRequest<{ Params: { id: String } }>, reply: FastifyReply) => await updateProduct(request, reply)
    );

    app.delete("/products/:id", 
        async (request: FastifyRequest<{ Params: { id: String } }>, reply: FastifyReply) => await deleteProduct(request, reply)
    );
}

export default eProdRoutes;