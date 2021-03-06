const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const pad = n => n.toString().length > 1 ? `${n}` : `0${n}`

export default function dateFormatter(timestamp) {
  const date = new Date(timestamp);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hour = pad(date.getHours());
  const minute = pad(date.getMinutes());
  return `${month} ${day} ${hour}:${minute}`;
} 