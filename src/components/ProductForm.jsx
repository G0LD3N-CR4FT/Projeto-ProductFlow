import { Form, Input, Select, InputNumber  } from 'antd'

const { Option } = Select

const ProductForm = ({ form }) => {
  return (
    <Form form={form} layout="vertical" className="modal-form">
      <Form.Item
        name="nome"
        name="nome"
        label="Nome"
        rules={[{ required: true, message: 'Informe o nome do produto' }]}
      >
        <Input placeholder="Nome do produto" />
      </Form.Item>

      <Form.Item
        name="idCategoria"
        label="Categoria"
        rules={[{ required: true, message: 'Selecione a categoria' }]}
      >
        <Select placeholder="Selecione a categoria">
          <Option value={1}>Doces</Option>
          <Option value={2}>Cafés</Option>
          <Option value={3}>Salgados</Option>
          <Option value={4}>Bebidas</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="foto"
        label="URL da Imagem"
        rules={[
          { required: true, message: 'Informe a URL da imagem' },
          { type: 'url', message: 'Informe uma URL válida' }
        ]}
      >
        <Input placeholder="https://exemplo.com/imagem.jpg" />
      </Form.Item>

      <Form.Item
        name="preco"
        label="Preço"
        rules={[
          { required: true, message: 'Informe o preço' },
          { type: 'number', min: 0.01, message: 'Informe um preço válido' }
        ]}
      >
        <InputNumber placeholder="0.00" min={0} step={0.01} />
      </Form.Item>

      <Form.Item
        name="descricao"
        label="Descrição"
        rules={[{ required: true, message: 'Informe a descrição' }]}
      >
        <Input.TextArea placeholder="Descrição do produto" rows={3} />
      </Form.Item>
    </Form>
  )
}

export default ProductForm