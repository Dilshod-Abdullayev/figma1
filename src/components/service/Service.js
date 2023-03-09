import React from "react";
import { servise__data } from "../../Data/Data";
import "../../assets/css/style.css";
export default function Service() {
  return (
    <div className="mt-8 w-full">
      <h1 className="text-center text-5xl">Top JS Framework va kutubxonalar</h1>
      <div className="box__right p-9">
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
  );
}
