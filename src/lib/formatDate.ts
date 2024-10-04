export function formatDate(date: string | undefined) {
  if (!date) return null;
  const d = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return d.toLocaleDateString("en-US", options);
}
