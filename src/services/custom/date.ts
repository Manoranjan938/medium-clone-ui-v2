const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// const days = [
//   "sunday",
//   "monday",
//   "tueday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
// ];

export const getDate = (times: string) => {
  const date = new Date(times);

  return `${date.getDate()} ${months[date.getMonth()]}`;
};

export const getFullDate = (times: string) => {
  const date = new Date(times);

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};
