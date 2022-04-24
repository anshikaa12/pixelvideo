const historyReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_HISTORY":
      return {
        ...state,
        historyList:
          state.historyList.find((item) => item._id === action.payload._id) !==
          undefined
            ? state.historyList
            : [...state.historyList, action.payload],
      };
    case "REMOVE_FROM_HISTORY":
      return {
        ...state,
        historyList: state.historyList.filter(
          (vid) => vid._id !== action.payload
        ),
      };
    case "CLEAR_HISTORY":
      return {
        ...state,
        historyList: [],
      };
    default:
      return state;
  }
};
export { historyReducer };
