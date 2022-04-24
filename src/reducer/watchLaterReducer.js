const watchLaterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LATER_VIDEO":
      return {
        ...state,
        watchLaterList:
          state.watchLaterList.find(
            (item) => item._id === action.payload._id
          ) !== undefined
            ? state.watchLaterList.filter(
                (vid) => vid._id !== action.payload._id
              )
            : [...state.watchLaterList, action.payload],
      };
    case "REMOVE_LATER_VIDEO":
      return {
        ...state,
        watchLaterList: state.watchLaterList.filter(
          (vid) => vid._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export { watchLaterReducer };
