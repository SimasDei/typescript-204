import React, { createContext, useReducer } from 'react';

type Action = {
  type: 'one' | 'two';
  payload?: any;
};

type State = {
  rValue: boolean;
  turnOn?: () => void;
  turnOff?: () => void;
};

export const initialValues: State = {
  rValue: true,
};

const GlobalContext = createContext(initialValues);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'one':
      return {
        ...state,
        rValue: true,
      };
    case 'two':
      return {
        ...state,
        rValue: false,
      };

    default:
      return state;
  }
};

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const boundValues: State = {
    rValue: state.rValue,
    turnOn: () => dispatch({ type: 'one' }),
    turnOff: () => dispatch({ type: 'two' }),
  };

  return <GlobalContext.Provider value={boundValues}>{children}</GlobalContext.Provider>;
};

export default GlobalContext;
