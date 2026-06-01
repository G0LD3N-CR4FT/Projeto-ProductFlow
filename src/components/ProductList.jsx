import { Spin, Empty } from 'antd'
import ProductCard from './ProductCard'

const ProductList = ({ produtos, loading, searchText, onEditar, onExcluir }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    )
  }

  if (produtos.length === 0) {
    return (
      <Empty
        description={searchText ? 'Nenhum produto encontrado' : 'Nenhum produto cadastrado'}
        style={{ marginTop: 48 }}
      />
    )
  }

  return (
    <div className="products-grid">
      {produtos.map((produto) => (
        <ProductCard
          key={produto.id}
          produto={produto}
          onEditar={onEditar}
          onExcluir={onExcluir}
        />
      ))}
    </div>
  )
}

export default ProductList