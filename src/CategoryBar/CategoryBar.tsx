import { imageCategories } from "../utils/constants";
import "./CategoryBar.css";
import { useDispatch } from "react-redux";
import { getSearchImages } from "../store/images/fetchImages/fetchImage";

const CategoryBar: React.FC = () => {
  const dispatch = useDispatch<any>();

  const fetchImageByCategory = (category: string) => {
    dispatch(getSearchImages(category));
  };

  return (
    <div className="category-container">
      <p onClick={() => fetchImageByCategory("random")}>Random</p>
      <div style={{ display: "block" }} className="divider"></div>
      <div className="category-bar">
        {imageCategories?.map((item: any, index) => {
          return (
            <p key={index} onClick={() => fetchImageByCategory(item.name)}>
              {item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryBar;
