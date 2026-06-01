import { useState } from 'react'
import { Layout, Form, notification } from 'antd'
import ProductHeader from './components/ProductHeader'
import ProductList from './components/ProductList'
import ProductModal from './components/ProductModal'
import { useProdutos } from './hooks/useProdutos'

const { Content } = Layout

const App = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalMode, setModalMode] = useState('create')
  const [modalLoading, setModalLoading] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [produtoEditando, setProdutoEditando] = useState(null)
  const [form] = Form.useForm()

  const {
    produtos,
    loading,
    criarProduto,
    atualizarProduto,
    deletarProduto,
    buscarProduto
  } = useProdutos()

  const abrirModalCriar = () => {
    setModalMode('create')
    setProdutoEditando(null)
    form.resetFields()
    setModalVisible(true)
  }

  const abrirModalEditar = async (produto) => {
    setModalMode('edit')
    setModalLoading(true)
    setModalVisible(true)
    try {
      const produtoData = await buscarProduto(produto.idProduto)
      setProdutoEditando(produto)
      form.setFieldsValue({
        idProduto: produtoData.idProduto,
        nome: produtoData.nome,
        idCategoria: produtoData.idCategoria,
        foto: produtoData.foto,
        preco: parseFloat(produtoData.preco || 0),
        descricao: produtoData.descricao
      })
    } catch (error) {
      notification.error({
        title: 'Erro',
        description: 'Não foi possível carregar os dados do produto.'
      })
      setModalVisible(false)
    } finally {
      setModalLoading(false)
    }
  }

  const fecharModal = () => {
    setModalVisible(false)
    setProdutoEditando(null)
    form.resetFields()
  }

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields()
      setModalLoading(true)

      if (modalMode === 'create') {
        await criarProduto(values)
      } else {
        await atualizarProduto(produtoEditando.idProduto, values)
      }

      fecharModal()
    } catch (error) {
      if (error.errorFields) return

      notification.error({
        title: 'Erro',
        description: error.response?.data?.message || 'Não foi possível salvar o produto.'
      })
    } finally {
      setModalLoading(false)
    }
  }

  const handleExcluir = async (produto) => {
    try {
      await deletarProduto(produto.idProduto)
    } catch (error) {
      notification.error({
        title: 'Erro',
        description: error.response?.data?.message || 'Não foi possível excluir o produto.'
      })
    }
  }

  const produtosFiltrados = produtos.filter((produto) => {
    const texto = searchText.toLowerCase()
    return (
      produto.nome?.toLowerCase().includes(texto) ||
      produto.descricao?.toLowerCase().includes(texto)
    )
  })

  return (
    <Layout className="app-container">
      <ProductHeader
        searchText={searchText}
        onSearchChange={(e) => setSearchText(e.target.value)}
        onNovoProduto={abrirModalCriar}
      />

      <Content>
        <ProductList
          produtos={produtosFiltrados}
          loading={loading}
          searchText={searchText}
          onEditar={abrirModalEditar}
          onExcluir={handleExcluir}
        />
      </Content>

      <ProductModal
        open={modalVisible}
        mode={modalMode}
        loading={modalLoading}
        form={form}
        onOk={handleSubmit}
        onCancel={fecharModal}
      />
    </Layout>
  )
}

export default App