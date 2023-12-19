import React, { useRef, useState } from "react";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross}">`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src="${circle}">`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      {
        won(data[5]);
      }
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      {
        won(data[8]);
      }
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      {
        won(data[6]);
      }
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      {
        won(data[7]);
      }
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      {
        won(data[8]);
      }
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      {
        won(data[8]);
      }
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      {
        won(data[2]);
      }
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      {
        won(data[6]);
      }
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src="${cross}" /> Wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src="${circle}" /> Wins `;
    }
  };
  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe Game";
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };
  return (
    <div className="h-screen w-screen bg-slate-600 p-4 items-center flex flex-col">
      <h1 className="text-center text-4xl font-bold text-white" ref={titleRef}>
        Tic Tac Toe <span className="text-green-400">Game</span>
      </h1>
      <div>
        <div className="flex justify-between rounded-md h-[125px] w-[370px] mt-4">
          <div
            ref={box1}
            className="flex justify-between border mt-2 mr-1 rounded-md h-[120px] w-[200px] bg-gray-900 onCl"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            ref={box2}
            className="flex justify-between border mt-2 rounded-md mr-1 h-[120px] w-[200px] bg-gray-900 onCl"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            ref={box3}
            className="flex justify-between border mt-2 rounded-md mr-1 h-[120px] w-[200px] bg-gray-900 onCl"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="flex justify-between rounded-md h-[125px] w-[370px]">
          <div
            ref={box4}
            className="flex justify-between border mt-2 mr-1 rounded-md h-[120px] w-[200px] bg-gray-900 onCl"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            ref={box5}
            className="flex justify-between border mt-2 rounded-md mr-1 h-[120px] w-[200px] bg-gray-900 onCl"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            ref={box6}
            className="flex justify-between border mt-2 rounded-md mr-1 h-[120px] w-[200px] bg-gray-900 onCl"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="flex justify-between rounded-md h-[125px] w-[370px]">
          <div
            ref={box7}
            className="flex justify-between border mt-2 mr-1 rounded-md h-[120px] w-[200px] bg-gray-900 onCl"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            ref={box8}
            className="flex justify-between border mt-2 rounded-md mr-1 h-[120px] w-[200px] bg-gray-900 onCl"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            ref={box9}
            className="flex justify-between border mt-2 rounded-md mr-1 h-[120px] w-[200px] bg-gray-900 onCl"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button
        onClick={() => reset()}
        className=" text-green-200 text-xl border rounded-3xl py-5 px-12 mt-16  "
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
