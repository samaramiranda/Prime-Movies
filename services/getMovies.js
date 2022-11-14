import axios from 'axios';

const apiPath = process.env.NEXT_PUBLIC_API_PATH;

const api = axios.create({
  baseURL: apiPath,
});

const getMovies = async url => {
  let data = {};

  try {
    const response = await api.get(url);
    data = response.data;
  } catch (err) {
    console.log(err);
  }

  return data;
};

export default getMovies;
