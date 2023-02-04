import React from "react";
const HeaderLeft = () => {
  return (
    <div
      className="p-10 flex-col  justify-items-center	flex-wrap"
      style={{ width: "60%" }}
    >
      <h1 className="text-center text-purple-900 tracking-wide mt-5	font-medium	 text-5xl	">
        Инвестиционная платформа
        <br /> эмиссионных ценных бумаг
      </h1>
      <p className="text-purple-900 text-lg	font-bold m-12">
        Входит в реестр инвестиционных <br /> платформ Банка России
      </p>
    </div>
  );
};

export default HeaderLeft;
