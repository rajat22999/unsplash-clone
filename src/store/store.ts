import { configureStore } from "@reduxjs/toolkit";
import { searchImages } from "../services/imageApi";
import fetchImage from "./images/fetchImages/fetchImage";
import randomSlice from "./images/random/randomSlice";

const store = configureStore({
  reducer: {
    images: fetchImage,
    random: randomSlice,
    search: searchImages
  },
});

export default store;
