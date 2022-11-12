const formatDate = (date) => {
  // Format date to Fri, YYYY-MM-DD HH:MM:SS
  return new Date(date).toUTCString().split(' ').slice(0, 5).join(' ');
};

export default formatDate;
