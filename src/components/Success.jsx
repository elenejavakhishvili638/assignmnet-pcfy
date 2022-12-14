import React from "react";
import SuccessLogo from "../images/success-logo.png";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <div className="success-main">
      <div className="success">
        <img className="success-logo" alt="pic" src={SuccessLogo} />
        <p>
          ჩანაწერი <br />
          დამატებულია!
        </p>
        <div className="success-btn-container">
          <button
            onClick={() => navigate("/laptopList")}
            className="go-back-btn"
          >
            სიაში გადაყვანა
          </button>
          <button className="main-btn" onClick={() => navigate("/")}>
            მთავარი
          </button>
        </div>
      </div>
    </div>
  );
}

export default Success;
