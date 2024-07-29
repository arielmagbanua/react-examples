import axios from "axios";

const ACCESS_KEY = "ACCESS_KEY_HERE";
const BASE_URL = "https://api.unsplash.com";

const searchImages = async (term) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
    params: {
      query: term,
    }
  });

  return response.data.results;
}

export default searchImages;
