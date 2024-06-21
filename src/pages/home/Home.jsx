import React from "react";
import "./Home.scss";
import img from "../../assets/loginImg.png";

const Home = () => {
  return (
    <main>
      <div className="home">
        <img src={img} alt="image" />
      </div>
    </main>
  );
};

export default Home;
