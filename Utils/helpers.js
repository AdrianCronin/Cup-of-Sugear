module.exports = {
  format_date: (date) => {
    if(date === null) {
      return null;
    }
    // Format date as MM/DD/YYYY
    return date.toDateString();
  },
  return_date: (date) => {
    if(date === null) {
      return null;
    }
    let returnDate = new Date(date);
    returnDate.setDate(returnDate.getDate() + 14);
    return returnDate.toDateString();
  },
};

