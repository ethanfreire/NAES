import { useState } from "react";
import { createContext } from "react";

//value we are storing
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//state !== context , must have default case for useState & User Context.
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
