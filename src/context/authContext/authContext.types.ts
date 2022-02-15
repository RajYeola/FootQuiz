import React from "react";
import { userInfo } from "../../api/api.types";

export type AuthContextProviderProps = {
  children: React.ReactNode;
};

export type AuthContextProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  signin: (userInfo: userInfo) => Promise<void>;
  signup: (userInfo: userInfo) => Promise<void>;
  signout: () => void;
  token: string | null;
};

type newUser = {
  email: string;
  password: string;
  name: string;
  _id: string;
  _v: number;
};

export type ResponseData = {
  success: boolean;
  token: string;
  newUser: newUser;
};
