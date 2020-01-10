import { createContext } from "react";

export const initialValues = {
  rValue: true
};

const GlobalContext = createContext(initialValues);

export default GlobalContext;
