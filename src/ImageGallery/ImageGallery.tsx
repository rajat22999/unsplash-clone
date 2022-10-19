import { Fragment, useEffect, useState } from "react";
import "./ImageGallery.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getImageData } from "../store/images/lorem/selector";
import { getImages } from "../store/images/lorem/loremSlice";

const ImageGallery: React.FC = () => {
  const dispatch = useDispatch<any>();
  const data: any = useSelector(getImageData);

  useEffect(() => {
    dispatch(getImages(30));
  }, []);

  return (
    <Fragment>
      {data && (
        <section>
          <div className="img-row">
            {data.slice(0, 10)?.map((item: any, index: any) => {
              return (
                <Fragment key={index}>
                  <img src={item?.urls?.small} alt="" />
                </Fragment>
              );
            })}
          </div>
          <div className="img-row">
            {data.slice(10, 20)?.map((item: any, index: any) => {
              return (
                <Fragment key={index}>
                  <img src={item?.urls?.small} alt="" />
                </Fragment>
              );
            })}
          </div>
          <div className="img-row">
            {data.slice(20, 30)?.map((item: any, index: any) => {
              return (
                <Fragment key={index}>
                  <img src={item?.urls?.small} alt="" />
                </Fragment>
              );
            })}
          </div>
        </section>
      )}
    </Fragment>
  );
};
export default ImageGallery;
