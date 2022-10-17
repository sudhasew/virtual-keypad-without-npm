import React, { useCallback, useRef } from "react";
import { ChangeEvent, Component, FormEvent, useState } from "react";

interface Props {
  onKeyUp: (key: string) => void;
  onKeyDelete: (key: string) => void;
  onKeySpace: (key: string) => void;
  onKeyTab: (key: string) => void;
}

export function Keypad({ onKeyUp, onKeyDelete, onKeySpace, onKeyTab }: Props) {
  const [keyToggle, setKeyToggle] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleClick() {
    setKeyToggle(!keyToggle);
  }

  // const handleOnChange = (e: any) => {
  //   updateCursorState(e.target.selectionStart);
  //   console.log(
  //     "updateCursorState",
  //     updateCursorState(e.target.selectionStart)
  //   );
  // };

  return (
    <form onSubmit={handleSubmit} className="keypad-container">
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("~")}>
            ~
          </button>
        ) : (
          <button className="onKeybtnTick" onClick={() => onKeyUp("`")}>
            `
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("!")}>
            !
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("1")}>
            1
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("@")}>
            @
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("2")}>
            2
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("#")}>
            #
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("3")}>
            3
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("$")}>
            $
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("4")}>
            4
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("%")}>
            %
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("5")}>
            5
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("^")}>
            ^
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("6")}>
            6
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("&")}>
            {"&"}
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("7")}>
            7
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("*")}>
            *
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("8")}>
            8
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("(")}>
            (
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("9")}>
            9
          </button>
        )}
      </span>
      {keyToggle ? (
        <input
          className="onKeybtn"
          type="button"
          value=")"
          onClick={() => onKeyUp(")")}
          onChange={(e) => e.target.value}
        />
      ) : (
        <input
          className="onKeybtn"
          type="button"
          value="0"
          onClick={() => onKeyUp("0")}
          onChange={(e) => e.target.value}
        />
      )}

      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("_")}>
            _
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("-")}>
            -
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("+")}>
            +
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("=")}>
            =
          </button>
        )}
      </span>
      <input
        name="delete"
        className="onKeyDelete"
        type="button"
        value="delete"
        onClick={() => onKeyDelete("delete")}
      />
      <br />

      <button className="onKeyTab" onClick={() => onKeyTab("tab")}>
        tab
      </button>

      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("Q")}>
            Q
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("q")}>
            q
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("W")}>
            W
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("w")}>
            w
          </button>
        )}
      </span>

      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("E")}>
            E
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("e")}>
            e
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("R")}>
            R
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("r")}>
            r
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("T")}>
            T
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("t")}>
            t
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("Y")}>
            Y
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("y")}>
            y
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("U")}>
            U
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("u")}>
            u
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("I")}>
            I
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("i")}>
            i
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("O")}>
            O
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("o")}>
            o
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("P")}>
            P
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("p")}>
            p
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("{")}>
            {"{"}
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("[")}>
            [
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("}")}>
            {"}"}
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("]")}>
            {"]"}
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("\\")}>
            \
          </button>
        ) : (
          <button className="onKeybtnPipe" onClick={() => onKeyUp("|")}>
            |
          </button>
        )}
      </span>
      <br />
      <span onClick={handleClick}>
        {keyToggle ? (
          <button className="onKeybtnCaps">CAPS</button>
        ) : (
          <button className="onKeyCaps">caps</button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("A")}>
            A
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("a")}>
            a
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("S")}>
            S
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("s")}>
            s
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("D")}>
            D
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("d")}>
            d
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("F")}>
            F
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("f")}>
            f
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("G")}>
            G
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("g")}>
            g
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("H")}>
            H
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("h")}>
            h
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("J")}>
            J
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("j")}>
            j
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn">K</button>
        ) : (
          <button className="onKeybtn">k</button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("L")}>
            L
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("l")}>
            l
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp(":")}>
            :
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp(";")}>
            ;
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp('"')}>
            "
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("'")}>
            '
          </button>
        )}
      </span>
      <button className="onKeyReturn" onClick={() => onKeyUp("return")}>
        return
      </button>
      <br />
      <span onClick={handleClick}>
        {keyToggle ? (
          <button className="onKeyShift">SHIFT</button>
        ) : (
          <button className="onKeyShift">shift</button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("Z")}>
            Z
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("z")}>
            z
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("X")}>
            X
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("x")}>
            x
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("C")}>
            C
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("c")}>
            c
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("V")}>
            V
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("v")}>
            v
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("B")}>
            B
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("b")}>
            b
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("N")}>
            N
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("n")}>
            n
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("M")}>
            M
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("m")}>
            m
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("<")}>
            {"<"}
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp(",")}>
            ,
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp(">")}>
            {">"}
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp(".")}>
            .
          </button>
        )}
      </span>
      <span>
        {keyToggle ? (
          <button className="onKeybtn" onClick={() => onKeyUp("?")}>
            {"?"}
          </button>
        ) : (
          <button className="onKeybtn" onClick={() => onKeyUp("/")}>
            /
          </button>
        )}
      </span>
      <span onClick={handleClick}>
        {keyToggle ? (
          <button className="onKeyShift2">SHIFT</button>
        ) : (
          <button className="onKeyShift2">shift</button>
        )}
      </span>
      <span>
        <button className="onKeyCom" onClick={() => onKeyUp(".com")}>
          .com
        </button>
      </span>
      <span>
        <button className="onKeybtnAt" onClick={() => onKeyUp("@")}>
          @
        </button>
      </span>
      <span>
        <button
          className="onKeybtnSpace"
          onClick={() => onKeySpace(" ")}
        ></button>
      </span>
    </form>
  );
}
