export const CATEGORIAS = {
  1: 'Doces',
  2: 'Cafés',
  3: 'Salgados',
  4: 'Bebidas'
}

export const formatarPreco = (preco) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}