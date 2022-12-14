import React from "react";
import { useNavigate } from "react-router-dom";

function Laptop({ laptopName, userName, userSurname, laptopImage, id }) {
  const navigate = useNavigate();

  function handleClick() {
    fetch(
      `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=722b8016d1dacb1a5e1d906de785c4f2`
    )
      .then((response) => response.json())
      .then((data) => {
        navigate("/eachLaptop", { state: { eachLaptop: data.data } });
      });
  }
  return (
    <div>
      <div className="see-laptop">
        <img
          className="laptop"
          alt="laptop"
          src={`https://pcfy.redberryinternship.ge/${laptopImage}`}
        />
        <div className="description">
          <p>
            {userName} {userSurname}
          </p>
          <p className="another-one">{laptopName}</p>
          <button href="#" className="see-more" onClick={handleClick}>
            მეტის ნახვა
          </button>
        </div>
      </div>
    </div>
  );
}

export default Laptop;
