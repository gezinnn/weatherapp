export function formatDateToLocale(date: Date, locale = 'pt-BR') {
  return date.toLocaleString(locale, {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });
}
