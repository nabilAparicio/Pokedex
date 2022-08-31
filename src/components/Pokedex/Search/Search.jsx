import React from "react";
import PokeNameInput from "./PokeNameInput";
import PokeTypeInput from "./PokeTypeInput";
import ToggleSwitch from "./ToggleSwitch";
import { useSelector } from "react-redux";

const Search = () => {
  const Toggle = useSelector((state) => state.toggleSwitchSlice);
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
