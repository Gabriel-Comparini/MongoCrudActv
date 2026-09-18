# AtvBdCrudMongoDB

CRUD básico de produtos para e-commerce, feito com Fastify e MongoDB.

## Tecnologias

- Node.js
- TypeScript
- Fastify 5
- Mongoose 9
- dotenv
- tsx

## Pré-requisitos

- Node.js 18+ e npm
- Um banco MongoDB (Atlas ou local)

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

2. Edite o `.env` com a sua URI:

```env
MONGO_URI=uri_cluster_mongo_db
```

## Como rodar

Popular o banco com dados de exemplo:

```bash
npm run seed
```

Iniciar o servidor em modo dev:

```bash
npm run dev
```

Servidor disponível em:

```
http://localhost:8000
```

## Estrutura do projeto

```
index.ts
src/
  config/database.ts
  models/eProdModel.ts
  controllers/eProdController.ts
  routers/eProdRoutes.ts
  startDbInfo.ts
```

## Modelo de dados

Produto (`Product`):

```json
{
  "nome": "Notebook Ultra 14",
  "descricao": "notebook compacto para estudos",
  "preco": 3299.9,
  "categoria": "eletronicos",
  "estoque": 9,
  "especificacoes": {
    "tela": "14 polegadas",
    "ram": "16GB"
  }
}
```

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| nome | string | sim |
| descricao | string | não |
| preco | number | sim |
| categoria | string | sim |
| estoque | number | sim |
| especificacoes | object | não |

## Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/health` | Verifica se a API está rodando |
| GET | `/products` | Lista produtos com filtros |
| GET | `/products/:id` | Busca produto por ID |
| POST | `/products` | Cria um produto |
| PATCH | `/products/:id` | Atualiza um produto |
| DELETE | `/products/:id` | Deleta um produto |

### Filtros do GET /products

| Parâmetro | Descrição | Exemplo |
|-----------|-----------|---------|
| cat | Filtra por categoria | `?cat=roupas` |
| minP | Preço mínimo | `?minP=100` |
| maxP | Preço máximo | `?maxP=500` |
| obj | Busca textual em nome/descricao | `?obj=notebook` |
| ord | Ordenação `preco_asc` ou `preco_desc` | `?ord=preco_asc` |
| pag | Página (padrão 1) | `?pag=1` |
| lim | Limite por página (padrão 6) | `?lim=6` |

Exemplo:

```
GET /products?cat=eletronicos&minP=300&ord=preco_asc&pag=1&lim=6
```

### Exemplos

Criar produto:

```bash
curl -X POST http://localhost:8000/products \
  -H "Content-Type: application/json" \
  -d '{"nome": "Camisa Básica", "preco": 79.9, "categoria": "roupas", "estoque": 10}'
```

Atualizar estoque somando (incremento):

```bash
curl -X PATCH "http://localhost:8000/products/:id?actv=yes" \
  -H "Content-Type: application/json" \
  -d '{"estoque": 5}'
```

Atualizar substituindo:

```bash
curl -X PATCH http://localhost:8000/products/:id \
  -H "Content-Type: application/json" \
  -d '{"preco": 99.9, "estoque": 20}'
```

## Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
