import React from "react";

export default function Answer__items({ data }) {
  return (
    <div className="w-full flex flex-col">
      {data.map((item) => (
        <div className="flex  mt-5" key={item.id}>
          <h1 className="text-xl font-bold">{item.id}.</h1>
          <p className="text-xl tracking-wide leading-8">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
