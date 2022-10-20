export const fetchImages = (arg) => {
  return fetch(
    `https://api.unsplash.com/photos/?client_id=1i-ZXoeqYrgc3a_qRtxdgjafMORafhpvgCKrTogrdys&per_page=${arg}`
  )
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

export const searchImages = (searchString) => {
  return fetch(
    `https://api.unsplash.com/search/photos/?client_id=1i-ZXoeqYrgc3a_qRtxdgjafMORafhpvgCKrTogrdys&query=${searchString}&per_page=30`
  )
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

export const randomImage = () => {
  return fetch(
    `https://api.unsplash.com/photos/random/?client_id=1i-ZXoeqYrgc3a_qRtxdgjafMORafhpvgCKrTogrdys&query=wallpaper&orientation=landscape`
  )
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};
