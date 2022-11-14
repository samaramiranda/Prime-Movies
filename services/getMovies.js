import axios from 'axios';

const getMovies = async url => {
  let data = {};

  try {
    const response = await axios.get(url);
    data = response.data;
  } catch (err) {
    console.log(err);
  }

  return data;
};

export default getMovies;
