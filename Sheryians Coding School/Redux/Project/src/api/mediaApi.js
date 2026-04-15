import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;

export const fetchPhotos = async (query, page = 1, perPage = 20) => {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, perPage },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });

 return res.data
};
// export const fetchVideos = async (query, page = 1, perPage = 15) => {
//   const res = await axios.get("https://api.unsplash.com/search/videos", {
//     params: { query, page, perPage },
//     headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
//   });

//  return res.data
// };
