import { Space, Input, Button } from 'antd'
import { PlusOutlined, SearchOutlined, DeploymentUnitOutlined } from '@ant-design/icons'

const ProductHeader = ({ searchText, onSearchChange, onNovoProduto }) => {
  return (
    <header className="app-header">
      <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
        <Space align="center">
          <DeploymentUnitOutlined style={{ fontSize: 28, color: '#8b4513' }} />
          <h1 className="app-title">Painel de Produtos - ProductFlow</h1>
        </Space>
        <div className="search-container">
          <Input
            placeholder="Buscar por nome ou descrição..."
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={onSearchChange}
            style={{ maxWidth: 400 }}
            allowClear
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={onNovoProduto}
            style={{ backgroundColor: '#8b4513' }}
          >
            Novo Produto
          </Button>
        </div>
      </Space>
    </header>
  )
}

export default ProductHeader