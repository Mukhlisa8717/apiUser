import React, { useState } from "react";
import "./Login.scss";
import logo from "../../../public/logo.png";
import loginImg from "../../assets/loginImg.png";
import Register from "../../components/register/Register";
import LoginContent from "../../components/loginContent/LoginContent";

const Login = ({ setIsLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="login">
      <div className="login__left">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="login__left-img">
          <img src={loginImg} alt="" />
        </div>
      </div>
      <div className="login__right">
        {isRegister ? (
          <Register setIsRegister={setIsRegister} setIsLogin={setIsLogin} />
        ) : (
          <LoginContent setIsRegister={setIsRegister} setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};

export default Login;
