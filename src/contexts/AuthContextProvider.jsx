import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthContextProvider

 = ({ children }) => {
  const [user, setUser] = useState();
  const [isInitialRender, setIsInitialRender] = useState(true);
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [user, isInitialRender]);

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider

;
