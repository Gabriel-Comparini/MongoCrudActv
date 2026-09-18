interface ProductBody {
    nome: string;
    descricao: string;
    preco: number;
    categoria: string;
    estoque: number;
    especificacoes?: Object;
}

interface QueryProduct {
    cat?: string;
    minP?: number;
    maxP?: number;
    obj?: string;
    ord?: string;
}