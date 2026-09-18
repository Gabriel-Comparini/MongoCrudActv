import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productModel from './models/eProdModel';

dotenv.config();

async function init() {
    try {
        if (!process.env.MONGO_URI) return console.log("Falta a URI.")
        await mongoose.connect(process.env.MONGO_URI);
        await productModel.deleteMany({});
        await productModel.insertMany([
            {
                nome: 'Jaqueta Corta Vento Urban',
                descricao: 'jaqueta leve impermeavel para uso urbano e atividades ao ar livre',
                preco: 189.9,
                categoria: 'roupas',
                estoque: 18,
                especificacoes: { tamanho: 'M', cor: 'verde militar', material: 'poliester', fechamento: 'ziper' },
            },
            {
                nome: 'Moletom Oversized Comfort',
                descricao: 'moletom amplo com capuz e bolso frontal',
                preco: 159.9,
                categoria: 'roupas',
                estoque: 42,
                especificacoes: { tamanho: 'GG', cor: 'cinza', material: 'algodao', capuz: 'sim' },
            },
            {
                nome: 'Vestido Midi Floral',
                descricao: 'vestido midi estampado com tecido leve e modelagem soltinha',
                preco: 219.9,
                categoria: 'roupas',
                estoque: 14,
                especificacoes: { tamanho: 'P', cor: 'vermelho floral', material: 'viscose', comprimento: 'midi' },
            },
            {
                nome: 'Panela Eletrica Multifuncional',
                descricao: 'panela eletrica para cozinhar arroz massas legumes e outros alimentos',
                preco: 279.9,
                categoria: 'eletrodomesticos',
                estoque: 22,
                especificacoes: { voltagem: '127V', potencia: '700W', capacidade: '4L' },
            },
            {
                nome: 'Aspirador Vertical Turbo',
                descricao: 'aspirador vertical compacto com alta potencia de sucao',
                preco: 429.9,
                categoria: 'eletrodomesticos',
                estoque: 16,
                especificacoes: { voltagem: '220V', potencia: '1200W', filtro: 'HEPA', reservatorio: '1.2L' },
            },
            {
                nome: 'Sanduicheira Grill Inox',
                descricao: 'sanduicheira eletrica com placas antiaderentes e acabamento em inox',
                preco: 139.9,
                categoria: 'eletrodomesticos',
                estoque: 31,
                especificacoes: { voltagem: '127V', potencia: '750W', placas: 'antiaderentes', acabamento: 'inox' },
            },
            {
                nome: 'Notebook Ultra 14',
                descricao: 'notebook compacto para estudos trabalho e tarefas do dia a dia',
                preco: 3299.9,
                categoria: 'eletronicos',
                estoque: 9,
                especificacoes: { tela: '14 polegadas', memoria: '512GB SSD', ram: '16GB', processador: 'Core i5' },
            },
            {
                nome: 'Smartwatch Active Fit',
                descricao: 'relogio inteligente com monitoramento esportivo e notificacoes',
                preco: 459.9,
                categoria: 'eletronicos',
                estoque: 27,
                especificacoes: { tela: '1.8 polegadas', bateria: '10 dias', conectividade: 'bluetooth 5.2', resistencia: 'IP68' },
            },
            {
                nome: 'Caixa de Som Pulse 360',
                descricao: 'caixa de som portatil com audio potente e iluminacao integrada',
                preco: 379.9,
                categoria: 'eletronicos',
                estoque: 19,
                especificacoes: { potencia: '40W', bateria: '18h', conectividade: 'bluetooth 5.3', resistencia: 'IPX6' },
            },
            {
                nome: 'Bota Adventure Trek',
                descricao: 'bota resistente para trilhas caminhadas e aventuras ao ar livre',
                preco: 489.9,
                categoria: 'calcados',
                estoque: 11,
                especificacoes: { tamanho: '41', cor: 'marrom', material: 'couro sintetico', solado: 'borracha' },
            },
            {
                nome: 'Sandalia Comfort Flex',
                descricao: 'sandalia casual com palmilha macia e solado flexivel',
                preco: 129.9,
                categoria: 'calcados',
                estoque: 38,
                especificacoes: { tamanho: '37', cor: 'bege', material: 'sintetico', fechamento: 'fivela' },
            },
            {
                nome: 'Tenis Casual Street',
                descricao: 'tenis casual moderno para uso diario com solado confortavel',
                preco: 279.9,
                categoria: 'calcados',
                estoque: 24,
                especificacoes: { tamanho: '39', cor: 'branco', material: 'mesh', solado: 'EVA' },
            }
        ]);

        await mongoose.disconnect();
    } catch (error) {
        console.error("A seed não funcionou: ", error);
    }
}

init();