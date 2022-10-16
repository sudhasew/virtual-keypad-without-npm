import React, { useState } from "react";

import { Keypad } from "./Keypad";

function App() {
  const [code, setCode] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const [delVisit, setDelVisit] = useState(0);
  function onKeyUp(letter: string) {
    setCode((prev) => prev + letter);
    console.log("curs pos", cursorPosition);
    if (cursorPosition != 0) {
      let textBeforeCursorPosition = code.substring(0, cursorPosition);
      console.log("textBeforeCursorPosition", textBeforeCursorPosition);
      let textAfterCursorPosition = code.substring(cursorPosition, code.length);
      setCode(textBeforeCursorPosition + letter + textAfterCursorPosition);
      console.log("after setcode ", code);
    }
  }

  const getCursorPosition = (e: any) => {
    let cursorPosition = e.target.selectionStart;
    setCursorPosition(cursorPosition);
    console.log("cursorPosition", cursorPosition);
  };

  const onKeyDelete = (letter: string) => {
    console.log("letter is", letter);
    console.log("cursor pos", cursorPosition);
    console.log("delVist ", delVisit);
    if (delVisit > 0 && cursorPosition === 0) {
      setCode(code);
    } else if (cursorPosition !== 0) {
      let textBeforeCursorPosition = code.substring(0, cursorPosition);
      console.log("textBeforeCursorPosition", textBeforeCursorPosition);
      let textAfterDel = textBeforeCursorPosition.slice(0, -1);
      setCursorPosition(cursorPosition - 1);
      let textAfterCursorPosition = code.substring(cursorPosition, code.length);
      console.log("textAfterCursorPosition", textAfterCursorPosition);
      setCode(textAfterDel + textAfterCursorPosition);
    } else if (delVisit === 0 && cursorPosition === 0) {
      setCode((prev) => prev.slice(0, -1));
    }
    setDelVisit(delVisit + 1);
  };

  const onKeyTab = (letter: string) => {
    console.log("letter is", letter);
    if (letter === "tab" && cursorPosition != 0) {
      let textBeforeCursorPosition = code.substring(0, cursorPosition);
      let textAfterCursorPosition = code.substring(cursorPosition, code.length);
      setCode(textBeforeCursorPosition + "        " + textAfterCursorPosition);
    }
  };

  const onKeySpace = (letter: string) => {
    console.log("letter is", letter);
    if (letter === " " && cursorPosition != 0) {
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
}

export default App;
