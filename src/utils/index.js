const today = new Date();

const getYear = () => {
  return today.getFullYear();
};

const getSemester = () => {
  return today.getMonth() <= 5 ? 'Spring' : 'Fall';
};

//Format is Month Day, Year eg. "July 24, 2020"
const isFutureDate = (date) => {
    return date > today;
};

export { getSemester, getYear, isFutureDate };
