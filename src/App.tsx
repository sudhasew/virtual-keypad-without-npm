import React, { useState } from "react";
import { isCallChain } from "typescript";

import { Keypad } from "./Keypad";

const App = () => {
  const [code, setCode] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const [textB4Cursor, setTextB4Cursor] = useState(false);

  const getCursorPosition = (e: any) => {
    let cursorPosition = e.target.selectionStart;
    setCursorPosition(cursorPosition);
    console.log(cursorPosition);
  };

  const onKeyUp = (letter: string) => {
    setCode((prev) => prev + letter);
    if (cursorPosition !== 0) {
      let textBeforeCursorPosition = code.substring(0, cursorPosition);
      console.log("textBeforeCursorPosition", textBeforeCursorPosition);
      let textAfterCursorPosition = code.substring(cursorPosition, code.length);
      console.log("textAfterCursorPosition onKeyUp", textAfterCursorPosition);
      setCode(textBeforeCursorPosition + letter + textAfterCursorPosition);
      setCursorPosition(cursorPosition + 1);
    }
  };

  const onKeyDelete = () => {
    let textBeforeCursorPosition = "";
    if ((cursorPosition !== 0 && !textB4Cursor) || cursorPosition >= 1) {
      textBeforeCursorPosition = code.substring(0, cursorPosition);
      if (textBeforeCursorPosition.length !== 0) {
        setTextB4Cursor(true);
      }
      let textAfterDel = textBeforeCursorPosition.slice(0, -1);
      let textAfterCursorPosition = code.substring(cursorPosition, code.length);
      setCursorPosition(cursorPosition - 1);
      setCode(textAfterDel + textAfterCursorPosition);
    } else if (cursorPosition === 0 && !textB4Cursor) {
      setCode((prev) => prev.slice(0, -1));
    }
  };

  const onKeyTab = (letter: string) => {
    if (letter === "tab" && cursorPosition >= 0) {
      alert(`You pressed the tab with 9 "spaces"`);
      setCursorPosition(cursorPosition + 9);
      let textBeforeCursorPosition = code.substring(0, cursorPosition);
      let textAfterCursorPosition = code.substring(cursorPosition, code.length);
      setCode(textBeforeCursorPosition + "         " + textAfterCursorPosition);
    }
  };

  const onKeySpace = (letter: string) => {
    if (letter === " " || cursorPosition > 0) {
      alert("You pressed the space with 1");
      setCursorPosition(cursorPosition);
      let textBeforeCursorPosition = code.substring(0, cursorPosition);
      let textAfterCursorPosition = code.substring(cursorPosition, code.length);
      // setCode(textAfterCursorPosition + " " + textBeforeCursorPosition);
      if (textBeforeCursorPosition.length !== 0) {
        setCode(textBeforeCursorPosition + " " + textAfterCursorPosition);
        setCursorPosition(cursorPosition + 1);
        console.log(
          "textBeforeCursorPosition.length !== 0",
          textBeforeCursorPosition + " " + textAfterCursorPosition
        );
      }
      // else if (textAfterCursorPosition.length !== 0) {
      //   setCode(" " + code);
      //   console.log("textAfterCursorPosition", textAfterCursorPosition);
      // }
      console.log("cursor", code.length);
    } else if (cursorPosition >= 0) {
      setCursorPosition(cursorPosition + 1);
      setCode(" " + code);
      console.log("cursorPosition === 0", cursorPosition + 1);
    }
  };

  return (
    <div className="container">
      <textarea
        placeholder="Tap To Start"
        className="input"
        value={code}
        onChange={(e) => e.target.value}
        onClick={getCursorPosition}
      ></textarea>

      <Keypad
        onKeyUp={onKeyUp}
        onKeyDelete={onKeyDelete}
        onKeySpace={onKeySpace}
        onKeyTab={onKeyTab}
      />
    </div>
  );
};

export default App;
