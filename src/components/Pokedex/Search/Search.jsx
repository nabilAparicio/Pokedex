import React, { useState } from "react";
import PokeNameInput from "./PokeNameInput";
import PokeTypeInput from "./PokeTypeInput";
import ToggleSwitch from "./ToggleSwitch";

const Search = () => {
  const [Toggle, setToggle] = useState(true);
  return (
    <div className="flex place-content-center">
      <div className="flex flex-col items-center w-1/2  mb-10">
        <ToggleSwitch isOn={Toggle} handleToggle={() => setToggle(!Toggle)} />
        <div>{Toggle ? <PokeNameInput /> : <PokeTypeInput />}</div>
      </div>
    </div>
  );
};

export default Search;
