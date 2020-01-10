import React from "react";
import { createContext } from "react";

export const initialValues = {
  rValue: true
};

const GlobalContext = createContext(initialValues);

export const GlobalProvider: React.FC = ({ children }) => {
  return <GlobalContext.Provider value={initialValues}>{children}</GlobalContext.Provider>;
};

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

export default GlobalContext;
