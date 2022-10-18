import "./Banner.css";

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1>Unsplash</h1>
        <p>
          The internet’s source for visuals. brPowered by creators everywhere.
        </p>
        <div className="search-bar">
          <form style={{ borderRadius: 0, height: 54 }}>
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
            <input type="text" autoComplete="off" placeholder="Search photos" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Banner;