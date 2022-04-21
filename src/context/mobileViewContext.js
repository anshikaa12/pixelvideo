import { createContext, useContext, useReducer, useEffect } from "react";
import { toggleReducer } from "../reducer";
import { GetVideo } from "../services/videosApi";
const mobileView = createContext();

const useMobileView = () => useContext(mobileView);
const MobileViewProvider = ({ children }) => {
  const [toggleState, toggleDispatch] = useReducer(toggleReducer, {
    mobileViewActive: false,
    actionBtnContainer: [],
  });
  
  useEffect(() => {
    (async function () {
      try {
        const result = await GetVideo();
        toggleDispatch({ type: "LOAD_CARDDATA", payload: result.data.videos });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <mobileView.Provider value={{ toggleState, toggleDispatch }}>
      {children}
    </mobileView.Provider>
  );
};
export { useMobileView, MobileViewProvider };
