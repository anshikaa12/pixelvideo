import React from "react";
import { useCategoryFilter } from "../../context/filterCategoryContext";
import { useCategory } from "../../services/categoriesApi";
import { useNavigate } from "react-router-dom";
function TrendingVideo() {
  const { category } = useCategory();
  const { categoryFilterDispatch } = useCategoryFilter();
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/videolisting`;
    navigate(path);
  };
  return category.map((item, index) => {
    return (
      <div className="trending-container">
        <div
          className={
            index % 2 === 0 ? "trending-card evenFlex" : "trending-card oddFlex"
          }
        >
          <div
            className={
              index % 2 === 0
                ? "trending-img-container even flex-col-center"
                : "trending-img-container odd flex-col-center"
            }
          >
            <img className="trending-img" src={item.img} alt="text" />
          </div>
          <div className="trending-text">
            <h2 className="main-h2">{item.desc1}</h2>
            <h4 className="main-h4">{item.desc2}</h4>
            <button
              className={index % 2 === 0 ? "btn btn-primary" : "btn btn-accent"}
              onClick={() => {
                categoryFilterDispatch({ type: "NOTALL_CATEGORY_FILTER" });
                categoryFilterDispatch({
                  type: "CATEGORY_FILTER",
                  payload: item.categoryName,
                });
                routeChange();
              }}
            >
              Check Now
            </button>
          </div>
          <hr />
        </div>
        <div className={index % 2 === 0 ? "bannerEven" : "bannerOdd"}></div>
      </div>
    );
  });
}

export default TrendingVideo;
