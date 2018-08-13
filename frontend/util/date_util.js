// NB: this file is complete - you do not to write/edit anything!

export const formatDate = date => {
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  const daysOfWeek = {
    0: 'SUN',
    1: 'MON',
    2: 'TUES',
    3: 'WED',
    4: 'THURS',
    5: 'FRI',
    6: 'SAT',
  };
  const obj = new Date(date);
  const month = months[obj.getMonth()];
  const day = obj.getDate();
  const year = obj.getFullYear();
  const dayOfWeek = daysOfWeek[obj.getDay()];
  return `${dayOfWeek}, ${month} ${day}, ${year}`;
};

export const formatTime = date => {
  const obj = new Date(date);
  const fullHours = obj.getHours();
  let hours = fullHours % 12;
  if (hours === 0) hours = 12;
  const minutes = obj.getMinutes();
  const tmp = `0${minutes}`;
  const paddedMinutes = tmp.slice(tmp.length - 2);
  const ampm = fullHours < 12 || fullHours === 0 ? 'am' : 'pm';
  return `${hours}:${paddedMinutes} ${ampm}`;
};

export const formatDateTime = date => (
  `${formatDate(date)} ${formatTime(date)}`
);
