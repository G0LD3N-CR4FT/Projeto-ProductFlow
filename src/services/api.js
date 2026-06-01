import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const api = axios.create({
  baseURL: API_URL
});

export const listarProdutos = async () => {
  const response = await api.get('', { params: { token: API_TOKEN } });
  return response.data;
};

export const inserirProduto = async (produto) => {
  const formData = new FormData();
  formData.append('token', API_TOKEN);
  formData.append('nome', produto.nome);
  formData.append('idCategoria', produto.idCategoria);
  formData.append('foto', produto.foto);
  formData.append('preco', String(produto.preco));
  formData.append('descricao', produto.descricao);

  const response = await api.post('', formData);
  return response.data;
};

export const listarProduto = async (idProduto) => {
  const response = await api.get('', { params: { token: API_TOKEN, idProduto } });
  return response.data;
};

export const editarProduto = async (idProduto, produto) => {
  const idcategoria_limpo = produto.idCategoria || produto.idcategoria;

  const params = new URLSearchParams();
  
  params.append('idProduto', String(idProduto));
  
  params.append('produto', JSON.stringify({
    nome: produto.nome,
    idCategoria: parseInt(idcategoria_limpo),
    foto: produto.foto,
    preco: parseFloat(produto.preco),
    descricao: produto.descricao
  }));

  const response = await api.put('', params, {
    params: { token: API_TOKEN }
  });
  
  return response.data;
};

export const excluirProduto = async (idProduto) => {
  const response = await api.delete('', { params: { token: API_TOKEN, idProduto } });
  return response.data;
};

export default api;
