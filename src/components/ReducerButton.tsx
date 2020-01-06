import React, { useReducer } from 'react';

type Action = {
  type: string;
  payload?: any;
};

type State = {
  rValue: boolean;
};

const initialState = {
  rValue: true,
};

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

const ReducerButton = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <button onClick={() => dispatch({ type: 'one' })}>
        One{' '}
        <span role='img' aria-label='bee'>
          🐝
        </span>
      </button>
      <button onClick={() => dispatch({ type: 'two' })}>2b</button>
      {state?.rValue && 'Ahoy Sailor o/ ⛵'}
    </React.Fragment>
  );
};

export default ReducerButton;
