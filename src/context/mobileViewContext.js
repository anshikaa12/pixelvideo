import { createContext, useContext, useState } from "react";

const mobileView = createContext();
const useMobileView = () => useContext(mobileView);
const MobileViewProvider = ({ children }) => {
  const [mobileViewActive, setMobileViewActive] = useState(false);
  return (
    <mobileView.Provider value={{ mobileViewActive, setMobileViewActive }}>
      {children}
    </mobileView.Provider>
  );
};
export { useMobileView, MobileViewProvider };
