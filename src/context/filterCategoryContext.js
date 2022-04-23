import { createContext, useContext, useReducer } from "react";
import { categoryFilterReducer } from "../reducer";
const categoryFilter = createContext();
const useCategoryFilter = () => useContext(categoryFilter);
const CategoryFilterProvider = ({ children }) => {
  const [categoryFilterState, categoryFilterDispatch] = useReducer(
    categoryFilterReducer,
    {
      categoryFilter: [],
    }
  );
  return (
    <categoryFilter.Provider
      value={{ categoryFilterState, categoryFilterDispatch }}
    >
      {children}
    </categoryFilter.Provider>
  );
};

export { useCategoryFilter, CategoryFilterProvider };
