import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { userInfo } from "../../api/api.types";
import setupAuthHeaderForServiceCalls from "../../utils/setupAuthHeadersForServiceCalls";
import {
  AuthContextProps,
  AuthContextProviderProps,
  ResponseData,
} from "./authContext.types";
import {
  invalidCredentialsSignupToast,
  invalidCredentialsToast,
} from "../../utils/toasts";

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<null | string>("");
  const navigate = useNavigate();
  const url = "https://footquiz-backend-rajyeola.vercel.app";

  useEffect(() => {
    const isUserLoggedIn = JSON.parse(localStorage?.getItem("token") as string);

    if (isUserLoggedIn) {
      setIsLoggedIn(true);
      setupAuthHeaderForServiceCalls(isUserLoggedIn.token);
      setToken(isUserLoggedIn.token);
    }
  }, []);

  const signup = async (userInfo: userInfo) => {
    try {
      const {
        data: { token },
      } = await axios.post<ResponseData>(`${url}/user/signup`, userInfo);

      navigate("/");
      setIsLoggedIn(true);
      setToken(token);
      setupAuthHeaderForServiceCalls(token);
      localStorage?.setItem("token", JSON.stringify({ token }));
    } catch (error) {
      console.error(error);
      invalidCredentialsSignupToast();
    }
  };

  const signin = async (userInfo: userInfo) => {
    try {
      const {
        data: { token },
      } = await axios.post<ResponseData>(`${url}/user/signin`, userInfo);

      navigate("/");
      setIsLoggedIn(true);
      setToken(token);
      setupAuthHeaderForServiceCalls(token);
      localStorage.setItem("token", JSON.stringify({ token }));
    } catch (error) {
      console.error(error);
      invalidCredentialsToast();
    }
  };

  const signout = () => {
    setIsLoggedIn(false);
    setToken(null);
    setupAuthHeaderForServiceCalls(null);
    localStorage?.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, signin, signup, signout, token }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export function useAuth() {
  return useContext(AuthContext);
}
