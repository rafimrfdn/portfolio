export const RemoveSpace = (str) =>
  typeof str !== 'string' ? '' : str.toLowerCase().split(' ').join('')
