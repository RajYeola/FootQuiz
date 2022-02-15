import React, { useState } from "react";
import "./Login.css";
import { userInfo } from "../../../api/api.types";
import { useAuth } from "../../../context/authContext/authContext";
import { AuthContextProps } from "../../../context/authContext/authContext.types";
import { useNavigate } from "react-router";
import { Toaster } from "react-hot-toast";
import MediaQuery from "react-responsive";

const Login = () => {
  const { isLoggedIn, signin, signout } = useAuth() as AuthContextProps;
  const [userInfo, setUserInfo] = useState<userInfo>({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleUserInfoData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="view-container">
      <div className="w-3/4 md:w-3/4 mx-auto mt-20 md:mt-40">
        <h1 className="text-2xl md:text-3xl text-center font-bold">
          {isLoggedIn ? "You are Signed In" : "Sign In"}
        </h1>
        {!isLoggedIn ? (
          <div className="flex flex-col w-full items-center my-4">
            <input
              type="email"
              name="email"
              className="w-4/5 md:w-2/5 lg:w-1/4 input-basic my-2 pl-2 rounded"
              placeholder="Email"
              onChange={handleUserInfoData}
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-4/5 md:w-2/5 lg:w-1/4 input-basic my-2 pl-2 rounded"
              placeholder="Password"
              onChange={handleUserInfoData}
            />
            <label className="">
              <input
                className="pt-2"
                type="checkbox"
                onChange={() => setShowPassword((prev) => !prev)}
              />
              <span className="pl-2">Show Password</span>
            </label>
            <button
              className="w-3/5 md:w-2/5 lg:w-1/4 py-1 rounded mt-2 bg-success text-base md:text-lg uppercase"
              style={{
                color: "#fff",
              }}
              onClick={() => signin(userInfo)}
            >
              Sign in
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center my-3">
            <button
              className="w-3/5 md:w-2/5 lg:w-1/4 py-1 rounded mt-2 bg-danger uppercase"
              style={{
                color: "#fff",
              }}
              onClick={() => signout()}
            >
              Sign out
            </button>
          </div>
        )}
        {!isLoggedIn && (
          <div className="flex flex-col items-center my-3">
            <button
              className="text-xs md:text-base uppercase py-2 px-2 md:px-4 rounded tracking-wider md:tracking-wide"
              style={{ backgroundColor: "var(--secondary-background-color)" }}
              onClick={() => navigate("/signup")}
            >
              Don't have an account? Sign up
            </button>
          </div>
        )}
        <MediaQuery minWidth={769}>
          <Toaster position="top-right" />
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <Toaster position="bottom-center" />
        </MediaQuery>
      </div>
    </div>
  );
};

export default Login;
