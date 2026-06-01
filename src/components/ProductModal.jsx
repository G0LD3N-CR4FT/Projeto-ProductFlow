import { Modal, Spin } from 'antd'
import ProductForm from './ProductForm'

const ProductModal = ({
  open,
  mode,
  loading,
  form,
  onOk,
  onCancel
}) => {
  return (
    <Modal
      title={mode === 'create' ? 'Novo Produto' : 'Editar Produto'}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText={mode === 'create' ? 'Cadastrar' : 'Atualizar'}
      cancelText="Cancelar"
      confirmLoading={loading}
      maskClosable={false}
    >
      {loading && mode === 'edit' ? (
        <div className="loading-container">
          <Spin />
        </div>
      ) : (
        <ProductForm form={form} />
      )}
    </Modal>
  )
}

export default ProductModal