const toggleReducer = (state, action) => {
  switch (action.type) {
    case "MOBILE_VIEW":
      return { ...state, mobileViewActive: !state.mobileViewActive };
    case "ACTION_BTN":
      return {
        ...state,
        actionBtnContainer: state.actionBtnContainer.map((item) => {
          if (item._id === action.payload) {
            return { ...item, actionContainer: !item.actionContainer };
          }
          return item;
        }),
      };
    case "LOAD_CARDDATA":
      return {
        ...state,
        actionBtnContainer: action.payload,
      };
    default:
      return state;
  }
};
export { toggleReducer };
