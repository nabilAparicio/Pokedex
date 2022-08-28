import React from "react";
import { MdCatchingPokemon } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNameTrainer } from "../store/slice/name.slice";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.name.value.trim();
    if (inputValue.length !== 0) {
      dispatch(setNameTrainer(inputValue));
      navigate("/pokedex");
    }
    e.target.name.value = "";
  };
  return (
    <div className="flex bg-slate-50 place-content-center min-h-screen">
      <div className=" text-center bg-slate-200 p-7 rounded-md shadow-lg my-auto h-max">
        <h1 className="font-bold m-3 text-6xl ">Hello Trainer!</h1>
        <div className="h-96 mx-auto w-96">
          <img src="src/assets/images/trainer.png" alt="trainer-img" />
        </div>
        <div>
          <form action="submit" onSubmit={handleSubmit}>
            <div className=" relative flex flex-col">
              <label className="text-gray-700">
                Give me your name to start
              </label>
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  id="name"
                  className=" rounded-lg h-14 border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your name"
                />
                <button className="flex group hover:scale-110 hover:shadow-xl mx-auto h-14  self-end items-center p-1  transition ease-in duration-200 uppercase rounded-lg hover:bg-gray-800  hover:border-gray-800 hover:text-white border-2 border-gray-300 focus:outline-none">
                  <MdCatchingPokemon className=" group-hover:animate-spin text-4xl" />
                  <p className="font-bold">GO</p>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
