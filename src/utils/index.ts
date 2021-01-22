/**
 * Message time formating f(x)
 * @name formatDate
 * @param date
 */
export function formatDate(date: Date) {
  const h = '0' + date.getHours();
  const m = '0' + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}
