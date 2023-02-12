import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
const HeaderLeft = () => {
  const [typingStatus, setTypingStatus] = useState("Initializing");
  return (
    <div
      className="p-10 flex-col  justify-items-center	flex-wrap"
      style={{ width: "60%" }}
    >
      <h1 className="text-center text-purple-900 tracking-wide mt-5	font-medium	 text-5xl	">
        Endilikda{" "}
        <span className="text-yellow-500 font-extrabold">JavaScript</span>ni
        <br /> o`zbekchada o`rganamiz
      </h1>
      <p className="text-purple-900 text-lg	font-bold m-12">
        Hozirgi kunda eng mashxur dasturlash tillaridan biri bo`lgan{" "}
        <span className="text-yellow-500 font-extrabold">JavaScript</span>ni
        nega aynan bizda o'rganasiz?
        <TypeAnimation
          sequence={[
            1500,
            () => {
              setTypingStatus("Typing...");
            },
            "o'zbekchadagi yagona JAVASCRIPT platformasi",
            1700,
            () => {
              setTypingStatus("Typing...");
            },
            "bizlarda bilim oling",
            () => {
              setTypingStatus("Done Typing");
            },
            1000,
            () => {
              setTypingStatus("Deleting...");
            },
            "",
            () => {
              setTypingStatus("Done Deleting");
            },
          ]}
          speed={10}
          wrapper="div"
          repeat={Infinity}
        />
      </p>
    </div>
  );
};

export default HeaderLeft;
