const formatDate = (date) => {
  return new Date(date).toUTCString().replace(/(\d\d\d\d) .*/, '$1') // remove everything after YYYY
}

export default formatDate
