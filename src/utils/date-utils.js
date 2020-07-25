const todayInEST = new Date().toLocaleString('en-US', {
  timeZone: 'America/New_York',
});

const today = new Date(todayInEST);

const getYear = () => {
  return today.getFullYear();
};

const getSemester = () => {
  return today.getMonth() <= 5 ? 'Spring' : 'Fall';
};

//Format is Month Day, Year eg. "July 24, 2020"
const isPastDate = (date) => {
  const parsedDate = new Date(date);

  const isSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

  if (isSameDay(parsedDate, today)) {
    return false;
  } else return parsedDate < today;
};

const getAbbrvMonth = (month) => {
  return month.substring(0, 3);
};

export { getSemester, getYear, isPastDate, getAbbrvMonth };
