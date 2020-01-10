import React, { useReducer, useRef, useContext } from "react";

import useClickOutside from "../hooks/useClickOutside";
import GlobalContext from "../global/state";

type Action = {
  type: "one" | "two";
  payload?: any;
};

type State = {
  rValue: boolean;
};

const initialState = {
  rValue: true
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "one":
      return {
        ...state,
        rValue: true
      };
    case "two":
      return {
        ...state,
        rValue: false
      };

    default:
      return state;
  }
};

const ReducerButton = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const ref = useRef<HTMLDivElement>(null!);
  const { rValue } = useContext(GlobalContext);

  useClickOutside(ref, () => console.log("💩"));

  return (
    <div ref={ref}>
      <button onClick={() => dispatch({ type: "one" })}>
        One{" "}
        <span role="img" aria-label="bee">
          🐝
        </span>
      </button>
      <button onClick={() => dispatch({ type: "two" })}>2b</button>
      {rValue && "Ahoy Sailor o/ ⛵"}
    </div>
  );
};

export default ReducerButton;