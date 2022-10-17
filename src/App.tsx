import React, { useState } from "react";

import { Keypad } from "./Keypad";

const App = () => {
  const [code, setCode] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const [textB4Cursor, setTextB4Cursor] = useState(false);

  const getCursorPosition = (e: any) => {
    let cursorPosition = e.target.selectionStart;
    setCursorPosition(cursorPosition);
    console.log("cursorPosition", cursorPosition);
  };

  const onKeyUp = (letter: string) => {
    setCode((prev) => prev + letter);
    console.log("letter here is", letter);
    if (cursorPosition !== 0) {
      let textBeforeCursorPosition = code.substring(0, cursorPosition);
      console.log("textBeforeCursorPosition", textBeforeCursorPosition);
      let textAfterCursorPosition = code.substring(cursorPosition, code.length);
      setCode(textBeforeCursorPosition + letter + textAfterCursorPosition);
      console.log("after setcode ", code.length);
    }
  };

  const onKeyDelete = (letter: string) => {
    console.log("letter is", letter);
    console.log("cur pos in 33 is", cursorPosition);
    let textBeforeCursorPosition = "";
    console.log("textB4Cursor flag", textB4Cursor);
    if ((cursorPosition !== 0 && !textB4Cursor) || cursorPosition === 1) {
      textBeforeCursorPosition = code.substring(0, cursorPosition);
      if (textBeforeCursorPosition.length !== 0) {
        setTextB4Cursor(true);
      }
      let textAfterDel = textBeforeCursorPosition.slice(0, -1);
      let textAfterCursorPosition = code.substring(cursorPosition, code.length);
      console.log("textAfterCursorPosition", textAfterCursorPosition);
      setCursorPosition(cursorPosition - 1);
      setCode(textAfterDel + textAfterCursorPosition);
    } else if (cursorPosition === 0 && !textB4Cursor) {
      console.log("I am here");
      setCode((prev) => prev.slice(0, -1));
    }
  };

  const onKeyTab = (letter: string) => {
    console.log("letter is", letter);
    if (letter === "tab" && cursorPosition !== 0) {
      let textBeforeCursorPosition = code.substring(0, cursorPosition);
      let textAfterCursorPosition = code.substring(cursorPosition, code.length);
      setCode(textBeforeCursorPosition + "        " + textAfterCursorPosition);
    }
  };

  const onKeySpace = (letter: string) => {
    console.log("letter is", letter);
    if (letter === " " && cursorPosition !== 0) {
      let textBeforeCursorPosition = code.substring(0, cursorPosition);
      let textAfterCursorPosition = code.substring(cursorPosition, code.length);
      setCode(textBeforeCursorPosition + " " + textAfterCursorPosition);
    }
  };

  return (
    <div className="container">
      <header>
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
      </header>
    </div>
  );
};

export default App;
