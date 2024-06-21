import React from "react";
import { useGetInputValue } from "../../hooks/useGetInputValue";
import axios from "../../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  FirstName: "",
  LastName: "",
  UserName: "",
  password: "",
  phones: "",
};

const Register = ({ setIsRegister, setIsLogin }) => {
  const { formData, handleChange, setFormData } =
    useGetInputValue(initialState);

  const handleregister = async (e) => {
    e.preventDefault();

    try {
      formData.phones = [formData.phones];

      const response = await axios.post("/auth/user/sign-up", formData);

      if (response.status === 201) {
        localStorage.setItem("x-auth-token", response.data.data.token);
        localStorage.setItem(
          "user-data",
          JSON.stringify(response.data.data.user),
        );
        toast.success("Registration successful!");
        setIsLogin(true);
        setFormData(initialState);
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="login__right-content">
      <h1>Register to the platform</h1>
      <form onSubmit={handleregister}>
        <div className="input__cont">
          <label htmlFor="firstname">Firstname</label>
          <input
            value={formData.FirstName}
            onChange={handleChange}
            type="text"
            name="FirstName"
            id="firstName"
            placeholder="Your first name"
            required
          />
        </div>
        <div className="input__cont">
          <label htmlFor="lastname">Lastname</label>
          <input
            value={formData.LastName}
            onChange={handleChange}
            type="text"
            name="LastName"
            id="lastname"
            placeholder="Your last name"
            required
          />
        </div>
        <div className="input__cont">
          <label htmlFor="phones">Phone</label>
          <input
            value={formData.phones}
            onChange={handleChange}
            type="text"
            name="phones"
            id="phones"
            placeholder="Your Phone"
            required
          />
        </div>
        <div className="input__cont">
          <label htmlFor="username">Username</label>
          <input
            value={formData.UserName}
            onChange={handleChange}
            type="text"
            name="UserName"
            id="username"
            placeholder="Your username"
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
            placeholder="password"
            required
          />
        </div>
        <button className="form__btn" type="submit">
          Register
        </button>
      </form>
      <div className="account__title">
        <p>Do you have an account?</p>{" "}
        <button onClick={() => setIsRegister(false)}>Login</button>
      </div>
    </div>
  );
};

export default Register;
