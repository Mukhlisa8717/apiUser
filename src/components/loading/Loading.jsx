import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="lds-heart">
        <div></div>
      </div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
