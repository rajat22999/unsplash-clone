export const fetchImages = (arg) => {
  return fetch(
    `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&per_page=${arg}`
  )
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

export const searchImages = (searchString) => {
  return fetch(
    `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&query=${searchString}&per_page=30`
  )
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};

export const randomImage = () => {
  return fetch(
    `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&query=wallpaper&orientation=landscape`
  )
    .then((res) => res.json())
    .then((result) => {
      return result;
    });
};
