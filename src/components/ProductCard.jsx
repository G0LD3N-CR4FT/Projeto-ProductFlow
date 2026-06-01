import { Card, Button, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, CoffeeOutlined } from '@ant-design/icons'
import { CATEGORIAS, formatarPreco } from '../constants/categorias'

const ProductCard = ({ produto, onEditar, onExcluir }) => {
  return (
    <Card
      key={produto.idProduto}
      className="product-card"
      cover={
        produto.foto ? (
          <img
            src={produto.foto}
            alt={produto.nome}
            className="product-card-image"
            onError={(e) => {
              e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rpoCr3UEfXm8POHm74xMKzf5elsH3HIItQ&s'
            }}
          />
        ) : (
          <div
            style={{
              height: 160,
              background: '#faf0e6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CoffeeOutlined style={{ fontSize: 48, color: '#d4c4b0' }} />
          </div>
        )
      }
    >
      <div className="product-card-content">
        <h3 className="product-card-title">{produto.nome}</h3>
        <span className="product-card-category">
          {produto.categoria || 'Sem categoria'}
        </span>
        <p className="product-card-description">{produto.descricao}</p>
        <p className="product-card-price">{formatarPreco(produto.preco)}</p>
        <div className="product-card-actions">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => onEditar(produto)}
            style={{ color: '#8b4513' }}
          />
          <Popconfirm
            title="Excluir produto"
            description="Tem certeza que deseja excluir este produto?"
            onConfirm={() => onExcluir(produto)}
            okText="Sim"
            cancelText="Não"
            okButtonProps={{ danger: true }}
          >
            <Button type="text" icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </div>
      </div>
    </Card>
  )
}

export default ProductCard