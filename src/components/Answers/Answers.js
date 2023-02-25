import React, { useEffect, useState } from "react";
import { investor__data, company__data } from "../../Data/Data";
import Answer__items from "./Answer__items";
export default function Answers() {
  const [state, setState] = useState(true);
  const [data, setData] = useState([]);
  const handleClick = () => {
    setState(false);
  };
  useEffect(() => {
    setData(state ? investor__data : company__data);
  }, [state]);
  return (
    <div className="mt-12 p-5">
      <h1 className="text-center text-purple-900 font-semibold text-6xl">
        Ответы на частые вопросы
      </h1>
      <div className="component__answer flex justify-around mt-12 p-5">
        <div
          onClick={() => setState(true)}
          className="text-black font-bold text-2xl cursor-pointer hover:text-slate-900"
        >
          ИНВЕСТОРАМ
        </div>
        <div
          onClick={handleClick}
          className="text-black font-bold text-2xl cursor-pointer hover:text-slate-900"
        >
          КОМПАНИЯМ
        </div>
      </div>
        <Answer__items data={data} />
    </div>
  );
}
