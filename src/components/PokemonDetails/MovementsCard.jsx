import React from "react";

const MovementsCard = ({ Pokemon }) => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold">Movements</h2>
      <ul className="h-screen overflow-y-scroll">
        {Pokemon?.moves.map((move) => (
          <li className="text-center m-2" key={move.name + move.url}>
            {move.move.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovementsCard;
