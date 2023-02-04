import React from "react";
import logo from "../../assets/img/logo.png";
import photo from "../../assets/img/image 50.png";
import photo2 from "../../assets/img/image 51.png";

import "../../assets/css/style.css";
export default function Footer() {
  return (
    <div className="grid grid-cols-4 bg-white ">
      <div className="flex item flex-wrap content-between">
        <img src={logo} />
        <h2 className="text-center text-slate-400">Инвестиционная платформа</h2>
        <img src={photo2}/>
        <hr />
        <p>Finmuster входит в реестр инвестиционных платформ Банка России</p>
        <img src={photo} />
        <p>Член ассоциации операторов инвестиционных платформ</p>
      </div>
      <div className="flex item flex-wrap content-between">
        <ul>
          <li>ГЛАВНАЯ </li>
          <li>ИНВЕСТОРАМ</li>
          <li>КОМПАНИЯМ</li>
          <li>ПАРТНЕРАМ</li>
          <li>КЕЙСЫ</li>
          <li>БЛОГ</li>
          <li>КОНТАКТЫ</li>
        </ul>
      </div>
      <div className="flex item flex-wrap content-between">
        <ul>
          <li>КВАЛИФИЦИРОВАННЫМ ИНВЕСТОРАМ</li>
          <li>ИНВЕСТИЦИОННЫЕ РИСКИ</li>
          <li>РАСКРЫТИЕ ИНФОРМАЦИИ</li>
          <li>ДОКУМЕНТЫ</li>
        </ul>
      </div>
      <div className="flex item flex-wrap content-between">
        <h1>+7 (918) 142 48-44</h1>
        <h1>investplatformacb@gmail.com</h1>
        <p>
          Заключение с использованием инвестиционной платформы договоров, по
          которым привлекаются инвестиции, является высокорискованным и может
          привести к потере инвестиционных денежных средств в полном объеме.
          <br />
          <br />
          Политика конфиденциальности Пользовательское соглашение
        </p>
      </div>
    </div>
  );
}
