import { createContext, useContext, useReducer } from "react";
import { historyReducer } from "../reducer";

const historyContext = createContext();
const useHistoryContext = () => useContext(historyContext);

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(historyReducer, {
    historyList: [],
  });
  return (
    <historyContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </historyContext.Provider>
  );
};

export { HistoryProvider, useHistoryContext };
