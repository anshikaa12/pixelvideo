import React from "react";
import { useCategory } from "../../services/categoriesApi";
import { useCategoryFilter } from "../../context/filterCategoryContext";
import VideoListCard from "./videoListCard";

function Video() {
  const { category } = useCategory();
  const { categoryFilterDispatch } = useCategoryFilter();
  return (
    <div className="video-sec">
      <div className="category-tag-container">
        <button
          className="chip h5-text"
          onClick={() =>
            categoryFilterDispatch({
              type: "ALL_CATEGORY_FILTER",
              payload: category.map((item) => item.categoryName),
            })
          }
        >
          All
        </button>
        {category.map((item) => {
          return (
            <button
              key={item.categoryName}
              onClick={() => {
                categoryFilterDispatch({
                  type: "NOTALL_CATEGORY_FILTER",
                });
                categoryFilterDispatch({
                  type: "CATEGORY_FILTER",
                  payload: item.categoryName,
                });
              }}
              className="chip h5-text"
            >
              {item.categoryName}
            </button>
          );
        })}
      </div>
      <div className="video-list column-3-grid">
        <VideoListCard />
      </div>
    </div>
  );
}

export default Video;
