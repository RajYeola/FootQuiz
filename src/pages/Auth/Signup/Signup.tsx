import React, { useEffect, useState } from "react";
import "../Login/Login.css";
import { userInfo } from "../../../api/api.types";
import { useAuth } from "../../../context/authContext/authContext";
import { AuthContextProps } from "../../../context/authContext/authContext.types";
import { useNavigate } from "react-router";
import {
  invalidEmailToast,
  invalidNameToast,
  invalidPasswordToast,
} from "../../../utils/toasts";
import { Toaster } from "react-hot-toast";
import MediaQuery from "react-responsive";

const Signup = () => {
  const { signup, token } = useAuth() as AuthContextProps;
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

  const nameRegex = /^[a-zA-Z\s]{3,}$/;
  const nameTest = nameRegex.test(userInfo.name);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailTest = emailRegex.test(userInfo.email);

  const passwordRegex =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}/;
  const passwordTest = passwordRegex.test(userInfo.password);

  useEffect(() => {
    token && navigate("/login");
  }, [token, navigate]);

  return (
    <div className="view-container">
      <div className="w-3/4 md:w-3/4 mx-auto mt-20 md:mt-40">
        <h1 className="text-2xl md:text-3xl text-center font-bold">Sign up</h1>
        <div className="flex flex-col w-full items-center my-4">
          <input
            type="text"
            name="name"
            className="w-4/5 md:w-2/5 lg:w-1/4 input-basic my-2 pl-2 rounded"
            placeholder="Name"
            onChange={handleUserInfoData}
          />

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
            className="w-3/5 md:w-2/5 lg:w-1/4 py-1 rounded mt-2 bg-success text-base md:text-lg"
            style={{
              color: "#fff",
            }}
            onClick={() => {
              if (!nameTest) {
                invalidNameToast();
              } else if (!emailTest) {
                invalidEmailToast();
              } else if (!passwordTest) {
                invalidPasswordToast();
              } else {
                signup(userInfo);
              }
            }}
          >
            SIGN UP
          </button>
        </div>

        <div className="flex flex-col items-center my-3">
          <button
            className="text-xs md:text-base uppercase py-2 px-2 md:px-4 rounded tracking-wider md:tracking-wide"
            style={{ backgroundColor: "var(--secondary-background-color)" }}
            onClick={() => navigate("/login")}
          >
            Already have an account? Sign in
          </button>
        </div>
      </div>
      <MediaQuery minWidth={769}>
        <Toaster position="top-right" />
      </MediaQuery>
      <MediaQuery maxWidth={768}>
        <Toaster position="bottom-center" />
      </MediaQuery>
    </div>
  );
};

export default Signup;
