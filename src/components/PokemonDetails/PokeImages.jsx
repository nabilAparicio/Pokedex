import React from "react";

const PokeImages = ({ Pokemon }) => {
  console.log(Pokemon);
  return (
    <div className="flex bg-white justify-center rounded shadow-md flex-wrap">
      <div className="flex">
        <img src={Pokemon?.sprites.back_default} alt="" />
        <img src={Pokemon?.sprites.back_shiny} alt="" />
        <img src={Pokemon?.sprites.front_default} alt="" />
        <img src={Pokemon?.sprites.front_shiny} alt="" />
      </div>
      <div className="flex">
        <img
          className="h-24"
          src={Pokemon?.sprites.other.home.front_default}
          alt=""
        />
        <img
          className="h-24"
          src={Pokemon?.sprites.other.home.front_shiny}
          alt=""
        />
      </div>
    </div>
  );
};

export default PokeImages;
