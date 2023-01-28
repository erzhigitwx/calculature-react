import React, { useState } from "react";
import { compilator } from "./comp";

const Calculature = function () {
  const [value, setValue] = useState("");
  const firstChar = value[0];
  function clickHandler(symbol) {
    setValue(`${value}${symbol}`);
  }
  function toAccept() {
    const result = compilator(value);
    setValue(result);
  }
  function checkFirstChar() {
    switch (firstChar) {
      case "+":
        setValue("");
        break;
      case "×":
        setValue("");
        break;
      case "÷":
        setValue("");
        break;
      case ",":
        setValue("");
        break;
    }
  }
  checkFirstChar();
  return (
    <div className="container">
      <div className="wrapper">
        <div className="container__inner">
          <div className="result__field">
            <input
              className="result"
              type="text"
              disabled={true}
              value={value}
            />
          </div>

          <div className="buttons">
            <button className="button gray btn-1" onClick={() => setValue("")}>
              AC
            </button>
            <button className="button gray btn-2">+/-</button>
            <button
              className="button orange btn-3"
              onClick={() => clickHandler("÷")}
            >
              ÷
            </button>
            <button className="button btn-4" onClick={() => clickHandler("7")}>
              7
            </button>
            <button className="button btn-5" onClick={() => clickHandler("8")}>
              8
            </button>
            <button className="button btn-6" onClick={() => clickHandler("9")}>
              9
            </button>
            <button
              className="button  orange btn-7"
              onClick={() => clickHandler("×")}
            >
              ×
            </button>
            <button className="button btn-8" onClick={() => clickHandler("4")}>
              4
            </button>
            <button className="button btn-9" onClick={() => clickHandler("5")}>
              5
            </button>
            <button className="button btn-10" onClick={() => clickHandler("6")}>
              6
            </button>
            <button
              className="button orange btn-11"
              onClick={() => clickHandler("-")}
            >
              -
            </button>
            <button className="button btn-12" onClick={() => clickHandler("1")}>
              1
            </button>
            <button className="button btn-13" onClick={() => clickHandler("2")}>
              2
            </button>
            <button className="button btn-14" onClick={() => clickHandler("3")}>
              3
            </button>
            <button
              className="button orange btn-15"
              onClick={() => clickHandler("+")}
            >
              +
            </button>
            <button className="button btn-16" onClick={() => clickHandler("0")}>
              0
            </button>
            <button className="button btn-17" onClick={() => clickHandler(",")}>
              ,
            </button>
            <button className="button orange btn-18" onClick={toAccept}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculature;
