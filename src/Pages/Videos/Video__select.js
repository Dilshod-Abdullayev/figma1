import React, { useState } from "react";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { video__course_uz } from "../../Data/Data";
import { video__course_eng } from "../../Data/Data";
import uzphoto from "../../assets/img/uz.png";
import engphoto from "../../assets/img/english.png";
export default function Video__select() {
  const [active, setActive] = useState(true);
  const handleClick = () => {
    setActive(!active);
  };
  const [active_eng, setActive_eng] = useState(true);
  const handleClick_eng = () => {
    setActive_eng(!active_eng);
  };
  return (
    <div className="video__component bg-slate-900 p-5">
      <h1 className="text-center text-white text-3xl">Videolar to`plami</h1>
      <div className="w-full h-auto rounded  bg-slate-400 p-5 font-light border dark:border-gray-700 dark:bg-gray-900 divide-gray-800 ">
        <h1
          onClick={handleClick}
          className="select-none align-middle items-center	 flex text-4xl font-extrabold text-zinc-200 cursor-pointer"
        >
          {active ? (
            <AiOutlineMinusCircle className="mt-1" />
          ) : (
            <AiFillPlusCircle className="mt-1" />
          )}
          <img src={uzphoto} width="30px" height="30px" /> O`zbekcha videolar
        </h1>
        {active ? (
          <div className="flex flex-wrap justify-evenly">
            {video__course_uz.map((item) => (
              <div
                key={item.id}
                class="max-w-sm mt-5 pt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center"
              >
                <img
                  class="rounded-t-lg ml-4 hover:scale-110 transition duration-300 ease-in-out"
                  src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-on-yellow-11.png"
                  alt=""
                />
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.chanel}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    ko`rish
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-full h-auto rounded  bg-slate-400 p-5 font-light border dark:border-gray-700 dark:bg-gray-900 divide-gray-800 ">
        <h1
          onClick={handleClick_eng}
          className="select-none	 flex text-4xl font-extrabold text-zinc-200 cursor-pointer"
        >
          {active_eng ? (
            <AiOutlineMinusCircle className="mt-1" />
          ) : (
            <AiFillPlusCircle className="mt-1" />
          )}
          <img src={engphoto} width="30px" height="30px" /> Ingliz tilidagi
          videolar
        </h1>
        {active_eng ? (
          <div className="flex flex-wrap justify-evenly">
            {video__course_eng.map((item) => (
              <div
                key={item.id}
                class="max-w-sm mt-5 pt-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center"
              >
                <img
                  class="rounded-t-lg ml-4 hover:scale-110 transition duration-300 ease-in-out"
                  src="https://www.freepnglogos.com/uploads/javascript-png/js-logo-on-yellow-11.png"
                  alt=""
                />
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.chanel}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    ko`rish
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
