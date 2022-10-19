import { configureStore } from "@reduxjs/toolkit";
import loremSlice from "./images/lorem/loremSlice";

const store = configureStore({
  reducer: {
    lorem: loremSlice,
  },
});

export default store;
