const likedVideoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIKED_VIDEO":
      return {
        ...state,
        likedVidList:
          state.likedVidList.find((item) => item._id === action.payload._id) !==
          undefined
            ? state.likedVidList.filter((vid) => vid._id !== action.payload._id)
            : [...state.likedVidList, action.payload],
      };
    case "REMOVE_LIKED_VIDEO":
      return {
        ...state,
        likedVidList: state.likedVidList.filter(
          (vid) => vid._id !== action.payload
        ),
      };
    case "LIKED_ACTIVE_STATE":
      return {
        ...state,
        likedVidState: !state.likedVidState,
      };
    default:
      return state;
  }
};
export { likedVideoReducer };
