import { useEffect } from "react";
import { useState, useRef } from "react";
import "./Timer.css";
import { Button } from "./Buttons";

export const Timer = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [text, setText] = useState("");
  const stopTimer = useRef(null);
  useEffect(() => {
    return () => {
      clearInterval(stopTimer.current);
    };
  }, []);

  if (sec == 59) {
    setMin(min + 1);
    setSec(0);
  }
  useEffect(() => {
    if (Number(min) >= Number(text)) {
      clearInterval(stopTimer.current);
      setSec(0);
    }
  }, [sec]);
  const startTimer = () => {
    stopTimer.current = setInterval(() => {
      setSec((p) => {
        if (min >= text) {
          clearInterval(stopTimer.current);
          setSec(0);
        }
        return p + 1;
      });
    }, 1000);
  };
  return (
    <div id="mainbox">
      <div className="countDiv">
        <span className="font">
          {min < 10 ? "0" : null}
          {min}
        </span>{" "}
        <span id="dot">:</span>{" "}
        <span className="font">
          {sec < 10 ? "0" : null}
          {sec}
        </span>
      </div>
      <input
        type="number"
        required
        placeholder="Enter number here"
        value={text}
        onInput={(e) => setText(e.target.value)}
      />
      <div className="btnDiv">
        <Button
          onClick={() => {
            startTimer();
          }}
        >
          Start
        </Button>
        <Button
          onClick={() => {
            clearInterval(stopTimer.current);
          }}
        >
          Paush
        </Button>
        <Button
          onClick={() => {
            startTimer();
          }}
        >
          Restart
        </Button>
        <Button
          onClick={() => {
            setMin(0);
            setSec(0);
            setText("");
            clearInterval(stopTimer.current);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
