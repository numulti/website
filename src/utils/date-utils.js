// Global Variables
const todayInEST = new Date().toLocaleString('en-US', {
  timeZone: 'America/New_York',
});
const today = new Date(todayInEST);

// Helpers
const isSameDay = (first, second) => {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};

// Utils
export const getYear = () => {
  return today.getFullYear();
};

export const getSemester = () => {
  return today.getMonth() <= 5 ? 'Spring' : 'Fall';
};

//date format is Month Day, Year eg. "July 24, 2020"
export const isToday = (date) => {
  const parsedDate = new Date(date);
  return isSameDay(parsedDate, today);
};

//date format is Month Day, Year eg. "July 24, 2020"
export const isPastDate = (date) => {
  const parsedDate = new Date(date);

  if (isSameDay(parsedDate, today)) {
    return false;
  } else return parsedDate < today;
};

export const getAbbrvMonth = (month) => {
  return month.substring(0, 3);
};
