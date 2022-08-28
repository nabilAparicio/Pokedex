import React from "react";

const MainCard = ({ Pokemon }) => {
  console.log(Pokemon);
  return (
    <div className="shadow-lg">
      <img
        src={Pokemon.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <div>
        <h2>{Pokemon.name}</h2>
      </div>
    </div>
  );
};

export default MainCard;
