import React from "react";

const PokeNameInput = () => {
  return (
    <div>
      <div class=" relative ">
        <input
          type="text"
          id="rounded-email"
          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Your Pokemon Name"
        />
      </div>
    </div>
  );
};

export default PokeNameInput;
