import { createContext, useContext, useReducer } from "react";
import { singleVidReducer } from "../reducer";

const singleVidContext = createContext();
const useSingleVidContext = () => useContext(singleVidContext);
const SingleVidProvider = ({ children }) => {
  const [singleVidState, singleVidDispatch] = useReducer(singleVidReducer, {
    vidItem: null,
  });
  return (
    <singleVidContext.Provider value={{ singleVidState, singleVidDispatch }}>
      {children}
    </singleVidContext.Provider>
  );
};
export { useSingleVidContext, SingleVidProvider };
