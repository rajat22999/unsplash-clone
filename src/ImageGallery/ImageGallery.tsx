import { Fragment, useEffect, useState } from "react";
import "./ImageGallery.css";

const ImageGallery: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=1i-ZXoeqYrgc3a_qRtxdgjafMORafhpvgCKrTogrdys&per_page=30"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        setData(result);
      });
  };

  return (
    <section>
      <div className="img-row">
        {data.slice(0, 10)?.map((item, index) => {
          return (
            <Fragment key={index}>
              <img src={item?.urls?.small} alt="" />
            </Fragment>
          );
        })}
      </div>
      <div className="img-row">
        {data.slice(10, 20)?.map((item, index) => {
          return (
            <Fragment key={index}>
              <img src={item?.urls?.small} alt="" />
            </Fragment>
          );
        })}
      </div>
      <div className="img-row">
        {data.slice(20, 30)?.map((item, index) => {
          return (
            <Fragment key={index}>
              <img src={item?.urls?.small} alt="" />
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};
export default ImageGallery;
