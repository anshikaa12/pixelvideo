import React from "react";
import { Link } from "react-router-dom";
import { useCategoryFilter } from "../../context/filterCategoryContext";
import { useHistoryContext } from "../../context/historyContext";
import { useLikedVideoContext } from "../../context/likedVideoContext";
import { useMobileView } from "../../context/mobileViewContext";
import { useSingleVidContext } from "../../context/singleVidContext";
import { useWatchLaterContext } from "../../context/watchLaterContext";
import { categoryFilteredList } from "../../reducer/categoryFilterReducer";
import { useCategory } from "../../services/categoriesApi";
function VideoListCard() {
  const { toggleState, toggleDispatch } = useMobileView();
  const { categoryFilterState, categoryFilterDispatch } = useCategoryFilter();
  const { category } = useCategory();
  const { likedVideoDispatch } = useLikedVideoContext();
  const { watchLaterDispatch } = useWatchLaterContext();
  const { historyDispatch } = useHistoryContext();
  const { singleVidDispatch } = useSingleVidContext();
  function getUpdatedList() {
    if (categoryFilterState.categoryFilter.length === 0) {
      categoryFilterDispatch({
        type: "ALL_CATEGORY_FILTER",
        payload: category.map((item) => item.categoryName),
      });
      return categoryFilteredList(
        categoryFilterState.categoryFilter,
        toggleState.actionBtnContainer
      );
    } else {
      return categoryFilteredList(
        categoryFilterState.categoryFilter,
        toggleState.actionBtnContainer
      );
    }
  }
  const updatedList = getUpdatedList();
  return updatedList.map((item) => {
    return (
      <div
        key={item._id}
        className="basic-card"
        onClick={() =>
          historyDispatch({
            type: "ADD_TO_HISTORY",
            payload: item,
          })
        }
      >
        <Link to="/singlevid">
          <img
            style={{ height: "100%" }}
            src={item.thumbnail}
            className="card-img"
            onClick={() =>
              singleVidDispatch({
                type: "GO_TO_SINGLE_VID_PAGE",
                payload: item,
              })
            }
          />
        </Link>
        <div className="card-body">
          <div className="flex-row vid-title">
            <h4 className="card-title">{item.title}</h4>
            <div className="action-btn-box">
              <i
                className="fas fa-ellipsis-v card-icon action-btn"
                onClick={() =>
                  toggleDispatch({ type: "ACTION_BTN", payload: item._id })
                }
              ></i>
              <div
                className={
                  item.actionContainer === false
                    ? " action-btn-container-hide"
                    : "action-btn-container action-btn-container-show"
                }
              >
                <ul className="action-btn-list flex-col">
                  <li
                    className="action-btn-item"
                    onClick={() => {
                      watchLaterDispatch({
                        type: "ADD_LATER_VIDEO",
                        payload: item,
                      });
                      toggleDispatch({ type: "ACTION_BTN", payload: item._id });
                    }}
                  >
                    <i className="fas fa-plus-circle h5-text"></i>
                    <span className="h5-text">Watch Later</span>
                  </li>
                  <li
                    className="action-btn-item"
                    onClick={() => {
                      likedVideoDispatch({
                        type: "ADD_LIKED_VIDEO",
                        payload: item,
                      });
                      likedVideoDispatch({
                        type: "LIKED_ACTIVE_STATE",
                      });
                      toggleDispatch({ type: "ACTION_BTN", payload: item._id });
                    }}
                  >
                    <i className="fas fa-plus-circle h5-text"></i>
                    <span className="h5-text">Liked Videos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex-col">
            <span className="card-subtext">By {item.channelName}</span>
            <span className="card-subtext">{item.categoryName}</span>
          </div>
        </div>
      </div>
    );
  });
}

export default VideoListCard;
