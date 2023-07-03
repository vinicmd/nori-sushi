export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('pt-br', {
    localeMatcher: 'best fit',
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
  }).format(new Date(new Date(date)))
}
