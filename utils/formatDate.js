const formatDate = (date, format) => {
  if (date && format) {
    const [year] = date.split('-');
    return year;
  }

  return null;
};

export default formatDate;
