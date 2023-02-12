import React from "react";
import { servise__data } from "../../Data/Data";
import "../../assets/css/style.css";
export default function Service() {
  return (
    <div className="servise">
      <div className="flex  justify-between content-center items-center p-5">
        <div className="box__left ">
          <p className="text-white text-2xl	">ЛИЧНЫЙ СЧЕТ</p>
          <span className="text-4xl font-semibold		text-white mt-5">
            1 000 000 000 RUB
          </span>
          <button className="btn__num hover:bg-slate-500 hover:text-white">
            + 300-400 тыс.₽
          </button>
        </div>
        <div className="box__right ">
          {servise__data.map((item) => (
            <div key={item.id} className="box__right-box">
              <div className="flex w-64 justify-between p-4">
                <img src={item.img} />
                <h1 className="text-2xl font-extrabold">{item.title}</h1>
              </div>
              <p className="font-normal	 text-base		">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-white mt-32 service__sum w-full flex justify-between bg-violet-900 rounded-2xl p-4">
        <div className="servise__investor flex flex-col items-center w-6/12">
          <button className="text-black bg-white p-3 rounded-2xl mt-1 text-2xl font-semibold">
            ИНВЕСТОРАМ
          </button>
          <h1 className="w-1/2 text-center mt-12">
            Инвесторы могут видеть компании, отобранные специалистами, и
            вкладывать в них
          </h1>
          <h2 className="text-6xl mt-5 p-1">
            1000 <span>рублей</span>{" "}
          </h2>
          <button className="text-indigo-700 text-2xl bg-white p-3 rounded-2xl mt-12">
            ИНВЕСТИРОВАТЬ
          </button>
        </div>
        <div className="servise__company flex flex-col items-center w-6/12">
          <button className="text-black bg-white p-3 rounded-2xl mt-1 text-2xl font-semibold">
            КОМПАНИЯМ
          </button>
          <h1 className="w-1/2 mt-12 text-center">
            20 лет на рынке 20 лет на рынке 20 лет на рынке Компании могут
            привлечь инвестиции до 1 млрд. руб. в бизнес за 1-9 месяцев
          </h1>
          <h2 className="text-6xl mt-5 p-1">
            1<span>mlrd</span>
          </h2>
          <button className="text-indigo-700 text-2xl bg-white p-3 rounded-2xl mt-6">
            ИНВЕСТИРОВАТЬ
          </button>
        </div>
      </div>
    </div>
  );
}
