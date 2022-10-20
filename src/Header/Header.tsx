import { Fragment, useState } from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { getImages, getSearchImages } from "../store/images/lorem/loremSlice";
import CategoryBar from "../CategoryBar/CategoryBar";

const Header: React.FC = () => {
  const [searchString, setSearchString] = useState("");
  const [lastSearchString, setLastSearchString] = useState("");
  const dispatch = useDispatch<any>();
  const [showPopUp, setPopUp] = useState(false);

  const handelChange = (e: any) => {
    setSearchString(e.target.value);
  };

  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (lastSearchString == searchString) return;
    setLastSearchString(searchString);
    if (searchString) {
      dispatch(getSearchImages(searchString));
    } else {
      dispatch(getImages(30));
    }
  };

  return (
    <div className="header-container">
      <nav>
        <div className="logo">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            version="1.1"
            aria-labelledby="unsplash-home"
            aria-hidden="false"
          >
            <desc lang="en">Unsplash logo</desc>
            <title id="unsplash-home">Unsplash Home</title>
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
          </svg>
        </div>
        <div className="search-bar">
          <form onSubmit={handelSubmit}>
            <button type="submit">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                version="1.1"
                aria-hidden="false"
              >
                <desc lang="en">A magnifying glass</desc>
                <path d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
              </svg>
            </button>
            <input
              type="text"
              autoComplete="off"
              value={searchString}
              onChange={handelChange}
              placeholder="Search photos"
            />
          </form>
        </div>

        <ul>
          <li>
            <a href="#">Advertise</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Unsplash+</a>
          </li>
        </ul>
        <div className="divider"></div>
        <div className="login-signup">
          <a href="#">Log in</a>/<a href="#">Sign up</a>
        </div>

        <button className="submit-btn">Submit a Photo</button>

        <div className="menu" onClick={() => setPopUp(!showPopUp)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            version="1.1"
            aria-hidden="false"
          >
            <desc lang="en">navigation menu</desc>
            <path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z"></path>
          </svg>
          {showPopUp && (
            <div id="menu-popup">
              <p>About</p>
              <p>Join Us</p>
              <p>Developer Api</p>
              <p>Contact Us</p>
            </div>
          )}
        </div>
      </nav>
      <CategoryBar />
    </div>
  );
};
export default Header;
