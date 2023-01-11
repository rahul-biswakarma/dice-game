import React from "react";

const Dice = ({ diceColor, rollType, diceNo }) => {
  return (
    <ol className={`die-list ${rollType}`} data-roll="1" id={`die-${diceNo}`}>
      <li
        style={{ backgroundColor: diceColor }}
        className="die-item"
        data-side="1"
      >
        <span className="dot"></span>
      </li>
      <li
        style={{ backgroundColor: diceColor }}
        className="die-item"
        data-side="2"
      >
        <span className="dot"></span>
        <span className="dot"></span>
      </li>
      <li
        style={{ backgroundColor: diceColor }}
        className="die-item"
        data-side="3"
      >
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </li>
      <li
        style={{ backgroundColor: diceColor }}
        className="die-item"
        data-side="4"
      >
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </li>
      <li
        style={{ backgroundColor: diceColor }}
        className="die-item"
        data-side="5"
      >
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </li>
      <li
        style={{ backgroundColor: diceColor }}
        className="die-item"
        data-side="6"
      >
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </li>
    </ol>
  );
};

export default Dice;
