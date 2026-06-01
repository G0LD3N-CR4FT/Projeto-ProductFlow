import { useState, useEffect, useCallback } from 'react'
import { notification } from 'antd'
import {
  listarProdutos,
  inserirProduto,
  listarProduto,
  editarProduto,
  excluirProduto
} from '../services/api'

export const useProdutos = () => {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(false)

  const carregarProdutos = useCallback(async () => {
    setLoading(true)
    try {
      const data = await listarProdutos()
      setProdutos(data.dados || data)
    } catch (error) {
      notification.error({
        title: 'Erro',
        description: 'Não foi possível carregar os produtos.'
      })
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    carregarProdutos()
  }, [carregarProdutos])

  const criarProduto = async (produto) => {
    await inserirProduto(produto)
    notification.success({
      title: 'Sucesso',
      description: 'Produto cadastrado com sucesso!'
    })
    await carregarProdutos()
  }

  const atualizarProduto = async (id, produto) => {
    await editarProduto(id, produto)
    notification.success({
      title: 'Sucesso',
      description: 'Produto atualizado com sucesso!'
    })
    await carregarProdutos()
  }

  const deletarProduto = async (id) => {
    await excluirProduto(id)
    notification.success({
      title: 'Sucesso',
      description: 'Produto excluído com sucesso!'
    })
    await carregarProdutos()
  }

  const buscarProduto = async (id) => {
    const data = await listarProduto(id)
    return data.dados || data
  }

  return {
    produtos,
    loading,
    carregarProdutos,
    criarProduto,
    atualizarProduto,
    deletarProduto,
    buscarProduto
  }
}