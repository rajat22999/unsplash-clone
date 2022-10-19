export const fetchImages = (arg) => {
  return fetch(
    `https://api.unsplash.com/photos/?client_id=1i-ZXoeqYrgc3a_qRtxdgjafMORafhpvgCKrTogrdys&per_page=${arg}`
  )
    .then((res) => res.json())
    .then((result) => {
      console.log("result", result);
      return result;
    });
};

export const searchImages = (searchString) => {
  return fetch(
    `https://api.unsplash.com/search/photos/?client_id=1i-ZXoeqYrgc3a_qRtxdgjafMORafhpvgCKrTogrdys&query=${searchString}&per_page=30`
  )
    .then((res) => res.json())
    .then((result) => {
      console.log("result", result);
      return result;
    });
};
