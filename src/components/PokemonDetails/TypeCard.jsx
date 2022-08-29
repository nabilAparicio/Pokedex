import React from "react";
import Type from "./Type";

const TypeCard = ({ Pokemon }) => {
  return (
    <div className="bg-white rounded w-1/2">
      <h2 className="text-center text-3xl font-bold">Type</h2>
      <div className="flex flex-wrap justify-evenly">
        {Pokemon?.types.map((type) => (
          <Type type={type} key={type.name + type.url} />
        ))}
      </div>
    </div>
  );
};

export default TypeCard;
