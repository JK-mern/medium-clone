export function getFormattedDate() {
    const date = new Date();
    const day = date.getDate();  // Gets the day of the month
    const month = date.toLocaleString('en-US', { month: 'long' });  // Gets the full month name
    return `${day}, ${month}`;
  }
  

  