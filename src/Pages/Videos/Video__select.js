import React, { useState } from "react";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
export default function Video__select() {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="video__component bg-slate-900 p-5">
      <h1 className="text-center text-white text-3xl">Videolar to`plami</h1>
      <div className="w-full h-auto rounded  bg-slate-400 p-5 font-light border dark:border-gray-700 dark:bg-gray-900 divide-gray-800 ">
        <h1
          onClick={handleClick}
          className="select-none	 flex text-4xl font-extrabold text-zinc-200 cursor-pointer"
        >
          {active ? (
            <AiOutlineMinusCircle className="mt-1" />
          ) : (
            <AiFillPlusCircle className="mt-1" />
          )}
          Bu platforma haqida
        </h1>
        {active ? (
          <p className="mb-2 mt-5 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            assumenda!
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
