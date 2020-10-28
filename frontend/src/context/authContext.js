import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuthState = () => useContext(AuthContext);
