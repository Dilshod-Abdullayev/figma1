import React from "react";
import InvestorBox from "./Investor__box";

const Investor = () => {
  return (
    <div className="investor flex-col bg-rose-100 p-4">
      <h1 className="text-center text-4xl text-purple-900 font-extrabold mt-24 max-md:text-3xl">
        КОМПАНИИ, В КОТОРЫЕ ВЫ МОЖЕТЕ <br /> ИНВЕСТИРОВАТЬ НА ПЛАТФОРМЕ
      </h1>
      <InvestorBox />
      {/* <div className=" bg-violet-900 rounded-2xl mt-32 flex flex-col justify-center content-center ">
        <button
          className="w-10/12 bg-white p-5 rounded-3xl text-center text-purple-900 font-extrabold text-3xl"
          style={{ marginLeft: "10%" }}
        >
          ОТДАЕМ ПРИОРИТЕТ КОМПАНИЯМ, У КОТОРЫХ
        </button>
        <div className="text-white service__sum w-full flex justify-between">
          <div className="servise__investor flex flex-col items-center w-6/12">
            <h1 className="w-1/2 text-center mt-12">
              Инвесторы могут видеть компании, отобранные специалистами, и
              вкладывать в них
            </h1>
            <h2 className="text-6xl mt-5 p-1">
              1000 <span>рублей</span>{" "}
            </h2>
            <button className="relative bottom-14  text-indigo-700 text-2xl bg-white p-3 rounded-2xl mt-12">
              ИНВЕСТИРОВАТЬ
            </button>
          </div>
          <div className="servise__company flex flex-col items-center w-6/12">
            <h1 className="w-1/2 mt-12 text-center">
              20 лет на рынке 20 лет на рынке 20 лет на рынке Компании могут
              привлечь инвестиции до 1 млрд. руб. в бизнес за 1-9 месяцев
            </h1>
            <h2 className="text-6xl mt-5 p-1">
              1<span>mlrd</span>
            </h2>
            <button className="relative bottom-8 text-indigo-700 text-2xl bg-white p-3 rounded-2xl mt-6">
              ИНВЕСТИРОВАТЬ
            </button>
          </div>
          <div className="servise__company flex flex-col items-center w-6/12">
            <h1 className="w-1/2 mt-12 text-center">
              20 лет на рынке 20 лет на рынке 20 лет на рынке Компании могут
              привлечь инвестиции до 1 млрд.
            </h1>
            <h2 className="text-6xl mt-5 p-1">
              1.4<span>mlrd</span>
            </h2>
            <button className="relative bottom-6 text-indigo-700 text-2xl bg-white p-3 rounded-2xl mt-6">
              ИНВЕСТИРОВАТЬ
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Investor;
