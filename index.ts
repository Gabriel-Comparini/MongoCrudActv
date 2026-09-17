import fastify from "fastify";
import connectDB from "./src/config/database";

const HOST = "localhost";
const PORT = 8000;
const app = fastify();

// TODO tem que colocar o register aqui.

connectDB().then(() => {
    app.listen({
        host: HOST,
        port: PORT
    }, (err) => {
        if (err) return;
        console.log(`Servidor aberto e rodando em http://${HOST}:${PORT}`);
    });
})