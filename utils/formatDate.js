const formatDate = (date, format) => {
  if (date) {
    const [year, month, day] = date.split('-');

    if (format === 'dd/mm/yyyy') {
      return `${day}/${month}/${year}`;
    }

    if (format === 'yyyy') {
      return year;
    }
  }

  return null;
};

export default formatDate;
