const categoryFilterReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_FILTER":
      return {
        ...state,
        categoryFilter: state.categoryFilter.includes(action.payload)
          ? state.categoryFilter.filter((item) => item !== action.payload)
          : [...state.categoryFilter, action.payload],
      };
    case "ALL_CATEGORY_FILTER":
      return {
        ...state,
        categoryFilter: action.payload,
      };
    case "NOTALL_CATEGORY_FILTER":
      return {
        ...state,
        categoryFilter: [],
      };
    default:
      return state;
  }
};

const categoryFilteredList = (categoryFilter, cardData) => {
  return cardData.filter((item) => categoryFilter.includes(item.categoryName));
};
export { categoryFilterReducer, categoryFilteredList };
