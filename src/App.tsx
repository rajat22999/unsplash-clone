import React, { Fragment, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import ImageGallery from "./ImageGallery/ImageGallery";
import Banner from "./Banner/Banner";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ImageGallery />
    </div>
  );
};

export default App;
