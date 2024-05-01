import { createContext, useEffect, useState } from "react";

export const LoggedInUserContext = createContext();
const LoggeInUserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isInitialRender, setIsInitialRender] = useState(true);
  useEffect(() => {
    if (isInitialRender) {
        setIsInitialRender(false);
        setUser(JSON.parse(localStorage.getItem("user")));
      }
  }, [user,isInitialRender]);

  return (
    <LoggedInUserContext.Provider value={user}>
      {children}
    </LoggedInUserContext.Provider>
  );
};

export default LoggeInUserProvider;
