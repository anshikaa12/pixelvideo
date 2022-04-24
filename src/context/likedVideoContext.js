import { createContext, useContext, useReducer } from "react";
import { likedVideoReducer } from "../reducer";

const likedVideoContext = createContext();
const useLikedVideoContext = () => useContext(likedVideoContext);

const LikedVideoProvider = ({ children }) => {
  const [likedVideoState, likedVideoDispatch] = useReducer(likedVideoReducer, {
    likedVidList: [],
    likedVidState: false,
  });
  return (
    <likedVideoContext.Provider value={{ likedVideoState, likedVideoDispatch }}>
      {children}
    </likedVideoContext.Provider>
  );
};

export { useLikedVideoContext, LikedVideoProvider };
