export function formatCurrency(value: number | undefined) {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'EUR',
  }).format(value || 0)
}
