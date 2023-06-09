import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "login":
        return { ...state, user: action.payload };
      case "logout":
        return { ...state, user: null };
      case "isAuthReady":
        return { ...state, user: action.payload, isAuthReady: true };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(authReducer, { user: null, isAuthReady: false });

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged(function (user) {
      dispatch({ type: "isAuthReady", payload: user });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log("context: ", state);

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
