import React from "react";
import "../../assets/css/style.css";
import img from "../../assets/img/investor__box.png";
import { investor__page_box } from "../../Data/Data";
const InvestorBox = () => {
  return (
    <div className="flex justify-around flex-wrap mt-24">

      {
        investor__page_box.map((item)=>(
            <div className="investor__box" key={item.id}>
            <img src={item.img}/>
            <h1 className="text-3xl font-bold">{item.title}</h1>
            <h2 className="text-lg">
                {item.text}
            </h2>
            <h1 className="text-exl font-bold">
                {item.sum}
              <br />
              <span className="font-normal">
                {item.price}
              </span>
            </h1>
            <button className="w-full justify-center align-middle bg-purple-900 font-bold text-white p-5 rounded-3xl hover:text-gray-900 hover:bg-slate-400">
              ПОСМОТРЕТЬ КЕЙС
            </button>
          </div>
        ))
      }
    </div>
  );
};

export default InvestorBox;
