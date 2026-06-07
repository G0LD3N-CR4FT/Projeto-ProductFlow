# ProductFlow - Painel de Produtos

Sistema de gerenciamento de produtos (CRUD) para cafeteria, desenvolvido com React.js, Vite, Axios e Ant Design.

## Token Utilizado

```
ecb93886a065374573d5f5146459e5df69a8bd5c0fcaf203ce78b08cd5e8220a
```

## Variáveis de Ambiente

O projeto utiliza as seguintes variáveis de ambiente:

| Variável | Valor |
|----------|-------|
| `VITE_API_URL` | `https://www.minhacipa.com.br/_fatec/painel-cafeteria/api/produto` |
| `VITE_API_TOKEN` | `ecb93886a065374573d5f5146459e5df69a8bd5c0fcaf203ce78b08cd5e8220a` |

## Status das Funcionalidades

| Funcionalidade | Status |
|----------------|--------|
| Listar todos os produtos | Integralmente funcional |
| Cadastrar novo produto | Integralmente funcional |
| Editar produto existente | Integralmente funcional |
| Excluir produto | Integralmente funcional |
| Busca de produtos | Integralmente funcional |
| Validação de formulários | Integralmente funcional |
| Feedback de operações (notifications) | Integralmente funcional |
| Confirmação de exclusão (Popconfirm) | Integralmente funcional |
| Loading states (Spin) | Integralmente funcional |
| Exibição em Cards | Integralmente funcional |
| Formatação de preços (R$) | Integralmente funcional |
| Mapeamento de categorias | Integralmente funcional |
| Implantação Vercel (vercel.json) | Integralmente funcional |

## API Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/?token=TOKEN` | Lista todos os produtos |
| POST | `/` | Insere um novo produto |
| GET | `/?token=TOKEN&idproduto=ID` | Lista um produto específico |
| PUT | `/?token=TOKEN` | Edita um produto |
| DELETE | `/?token=TOKEN&idproduto=ID` | Exclui um produto |

## Categorias

| ID | Nome |
|----|------|
| 1 | Doces |
| 2 | Cafés |
| 3 | Salgados |
| 4 | Bebidas |

## Como Executar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

### Build para Produção

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

## Tecnologias

- **React.js** - Framework frontend
- **Vite** - Build tool
- **Axios** - Cliente HTTP
- **Ant Design** - Biblioteca de componentes UI
- **Vercel** - Plataforma de deploy
