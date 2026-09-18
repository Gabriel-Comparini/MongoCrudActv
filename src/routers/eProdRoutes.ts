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
        async (request: FastifyRequest, reply: FastifyReply) => await getProducts(request, reply)
    );
    
    app.get("/products/:id", 
        async (request: FastifyRequest, reply: FastifyReply) => await getProductById(request, reply)
    );

    app.post("/products", 
        async (request: FastifyRequest, reply: FastifyReply) => await createProduct(request, reply)
    );

    app.put("/products/:id", 
        async (request: FastifyRequest, reply: FastifyReply) => await updateProduct(request, reply)
    );

    app.delete("/products/:id", 
        async (request: FastifyRequest, reply: FastifyReply) => await deleteProduct(request, reply)
    );
}

export default eProdRoutes;