import axios from 'axios';

export const fetch = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
