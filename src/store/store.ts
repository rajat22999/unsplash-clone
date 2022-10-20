import { configureStore } from "@reduxjs/toolkit";
import loremSlice from "./images/lorem/loremSlice";
import randomSlice from "./images/random/randomSlice";

const store = configureStore({
  reducer: {
    lorem: loremSlice,
    random: randomSlice,
  },
});

export default store;
