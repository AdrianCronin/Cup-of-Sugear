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
  icon_display: (category) => {
    if(category === 1) {
      return "/img/icon_home.png";
    }
    else if (category === 2) {
      return "/img/icon_sports.png";
    }
    else {
      return "/img/icon_lawn.png";
    }
  }
};

