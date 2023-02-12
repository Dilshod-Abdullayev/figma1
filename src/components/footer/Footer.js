import React from "react";
import logo from "../../assets/img/logo.png";
import photo from "../../assets/img/image 50.png";
import photo2 from "../../assets/img/image 51.png";
import "../../assets/css/style.css";
import {
  BsTelephoneFill,
  BsTelegram,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
export default function Footer() {
  return (
    <div className="w-full grid grid-cols-4 bg-white m-4 p-5 ">
      <div className="flex item flex-wrap content-between">
        <img src={logo} />
        <h2 className="text-center text-slate-400">Инвестиционная платформа</h2>
        <img src={photo2} />
        <hr />
        <p className="text-slate-400 font-medium">
          Finmuster входит в реестр инвестиционных платформ Банка России
        </p>
        <img src={photo} />
        <p className="text-slate-400 font-medium">
          Член ассоциации операторов инвестиционных платформ
        </p>
      </div>
      <div className="flex item flex-wrap content-between ">
        <li>ГЛАВНАЯ </li>
        <li>ИНВЕСТОРАМ</li>
        <li>КОМПАНИЯМ</li>
        <li>ПАРТНЕРАМ</li>
        <li>КЕЙСЫ</li>
        <li>БЛОГ</li>
        <li>КОНТАКТЫ</li>
      </div>
      <div className="flex item flex-wrap content-between">
        <li>КВАЛИФИЦИРОВАННЫМ ИНВЕСТОРАМ</li>
        <li>ИНВЕСТИЦИОННЫЕ РИСКИ</li>
        <li>РАСКРЫТИЕ ИНФОРМАЦИИ</li>
        <li>ДОКУМЕНТЫ</li>
      </div>
      <div className="tracking-wider	 flex item flex-wrap content-between">
        <h1 className="flex text-center font-bold items-center">
          <BsTelephoneFill className=" text-2xl text-purple-900" /> +7 (918) 142
          48-44
        </h1>
        <h1 className="tracking-wider	 flex text-center font-bold items-center">
          <BiMessageDetail className="text-2xl text-purple-900" />{" "}
          investplatformacb@gmail.com
        </h1>
        <div className="socials flex justify-between">
          <BsTelegram className="text-4xl text-cyan-800" />
          <BsFacebook className="text-4xl text-cyan-400" />
          <BsInstagram className="text-4xl text-red-700" />
        </div>
        <p className="text-slate-400 font-medium">
          Заключение с использованием инвестиционной платформы договоров, по
          привести к потере инвестиционных денежных средств в полном объеме.
          <br />
          <br />
          Политика конфиденциальности Пользовательское соглашение
        </p>
      </div>
    </div>
  );
}
