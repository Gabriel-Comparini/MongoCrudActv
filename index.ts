import fastify from "fastify";
import connectDB from "./src/config/database";
import eProdRoutes from "./src/routers/eProdRoutes";

const HOST = "localhost";
const PORT = 8000;
const app = fastify();

app.register(eProdRoutes);

connectDB().then(() => {
    app.listen({
        host: HOST,
        port: PORT
    }, (err) => {
        if (err) return;
        console.log(`Servidor aberto e rodando em http://${HOST}:${PORT}`);
    });
})