const formatDate = date => {
  if (date) {
    const [year] = date.split('-');
    return year;
  }

  return null;
};

export default formatDate;
