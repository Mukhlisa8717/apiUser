import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";
import { toast } from "react-toastify";

const initialState = {
  UserName: "",
  password: "",
};

const LoginContent = ({ setIsRegister, setIsLogin }) => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/sign-in", formData);
      localStorage.setItem("x-auth-token", response.data.data.token);
      localStorage.setItem(
        "user-data",
        JSON.stringify(response.data.data.user),
      );
      toast.success("Login successful!");
      setIsLogin(true);
      setFormData(initialState);
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login__right-content">
      <h1>Login to the platform</h1>
      <form onSubmit={handleLogin}>
        <div className="input__cont">
          <label htmlFor="username">Username</label>
          <input
            value={formData.UserName}
            onChange={handleChange}
            type="text"
            name="UserName"
            id="username"
            required
          />
        </div>
        <div className="input__cont">
          <label htmlFor="password">Password</label>
          <input
            value={formData.password}
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <button className="form__btn" type="submit">
          Login
        </button>
      </form>
      <div className="account__title">
        <p>Don't have an account?</p>
        <button onClick={() => setIsRegister(true)}>Register</button>
      </div>
    </div>
  );
};

export default LoginContent;
