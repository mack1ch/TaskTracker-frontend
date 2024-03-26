export function parseDateString(dateString: string): Date | null {
  const dateParts = dateString.split("-");

  if (dateParts.length !== 3) {
    console.error("Invalid date string format. Use 'yyyy-mm-dd'.");
    return null;
  }

  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1;
  const day = parseInt(dateParts[2]);

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    console.error("Invalid date string format. Use 'yyyy-mm-dd'.");
    return null;
  }

  const date = new Date(year, month, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month ||
    date.getDate() !== day
  ) {
    console.error("Invalid date values.");
    return null;
  }

  return date;
}
