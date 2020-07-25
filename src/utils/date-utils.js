const today = new Date();

const getYear = () => {
  return today.getFullYear();
};

const getSemester = () => {
  return today.getMonth() <= 5 ? 'Spring' : 'Fall';
};

//Format is Month Day, Year eg. "July 24, 2020"
const isFutureDate = (date) => {
  return new Date(date) >= today;
};

const getAbbrvMonth = (month) => {
  return month.substring(0, 3);
};

export { getSemester, getYear, isFutureDate, getAbbrvMonth };
