import React from "react";
import "./App.css";
import Header from "./Header/Header";
import ImageGallery from "./ImageGallery/ImageGallery";
import Banner from "./Banner/Banner";
import { Provider } from "react-redux";
import store from "./store/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Banner />
      <ImageGallery />
    </Provider>
  );
};

export default App;
