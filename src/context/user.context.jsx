import { createContext, useEffect, useState } from "react";
import { authStateChangedListener } from "../utils/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export function UserProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = authStateChangedListener(user => {
      setCurrentUser(user);
    })

    return unsubscribe;
  },[])


  const value = {
    currentUser,
    setCurrentUser
  }

  return(
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}