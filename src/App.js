import React, { useState, useRef, useEffect } from "react";

import Dice from "./component/Dice";
import Blobs from "./component/Blobs";
import Winner from "./component/Winner";

const App = () => {
  // States
  const [firstFixed, setFirstFixed] = useState(false);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [thirdValue, setThirdValue] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (
      firstValue === secondValue &&
      secondValue === thirdValue &&
      firstValue !== 0 &&
      secondValue !== 0 &&
      thirdValue !== 0
    )
      setWon(true);
  }, [firstValue, secondValue, thirdValue]);

  function rollDice() {
    const dice = document.querySelectorAll(".die-list");

    if (!firstFixed) {
      let die = dice[0];
      toggleClasses(die);
      die.dataset.roll = getRandomNumber(1, 6);
      setFirstValue(die.dataset.roll);
    } else {
      for (let i = 1; i < 3; i++) {
        let die = dice[i];
        toggleClasses(die);
        die.dataset.roll = getRandomNumber(1, 6);
        if (i === 1) setSecondValue(die.dataset.roll);
        if (i === 2) setThirdValue(die.dataset.roll);
      }
    }
  }

  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }

  function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function makeMeWin() {
    setWon(true);
  }

  return (
    <>
      <Blobs />
      {won === true ? <Winner /> : <></>}
      <div className="relative w-[100vw] h-[100vh] overflow-hidden">
        <div className="main-item relative dice pattern-dots-sm white">
          <Dice diceColor={"#fc4a89"} rollType="even-roll" diceNo={1} />
          <Dice diceColor={"#335fdb"} rollType="even-roll" diceNo={2} />
          <Dice diceColor={"#3bd0c3"} rollType="odd-roll" diceNo={3} />
        </div>

        <div className="main-item button-container">
          <button onClick={rollDice} id="roll-button">
            Roll
          </button>
          <button
            onClick={(e) => {
              setFirstFixed(true);
              e.target.style.filter = "grayscale(100%)";
              e.target.textContent = "First Locked";
            }}
          >
            Lock First
          </button>
          <button
            id="win-button"
            onClick={() => {
              makeMeWin();
            }}
          >
            Make Me Win
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
