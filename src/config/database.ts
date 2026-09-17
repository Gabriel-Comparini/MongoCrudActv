import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        if(!process.env.MONGO_URI) return;
        
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log("MongoDB conectado com sucesso.");
    } catch (error) {
        console.log(`Erro de conexão no banco: ${error}`);
        process.exit(1);
    }
}

export default connectDB;