import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import Register from "./components/register/Register";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import User from "./pages/user/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("x-auth-token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      {isLogin ? (
        <>
          <Navbar setIsLogin={setIsLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/profile" element={<User />} />
          </Routes>
        </>
      ) : (
        <>
          <Login setIsLogin={setIsLogin} />
        </>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
