module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toDateString();
  },
  return_date: (date) => {
    let returnDate = new Date(date);
    returnDate.setDate(returnDate.getDate() + 14);
    return returnDate.toDateString();
  },
};

