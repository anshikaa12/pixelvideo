import { createContext, useContext, useReducer } from "react";
import { watchLaterReducer } from "../reducer";

const watchLaterContext = createContext();
const useWatchLaterContext = () => useContext(watchLaterContext);

const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, {
    watchLaterList: [],
  });
  return (
    <watchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
      {children}
    </watchLaterContext.Provider>
  );
};

export {WatchLaterProvider,useWatchLaterContext}
