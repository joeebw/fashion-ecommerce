import { createContext, useEffect, useReducer, useState } from "react";
import { authStateChangedListener } from "../utils/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
}

function userReducer(state, actions) {
  const {type, payload} = actions;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        currentUser: payload
      }
    default:
      throw new Error(`This type doesn't exist ${type}`)
  }
}

const INITIAL_VALUE = {
  currentUser: null
}

export function UserProvider({children}) {
  const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_VALUE);

  function setCurrentUser(user) {
    dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
  }

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