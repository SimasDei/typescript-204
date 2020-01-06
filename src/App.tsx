import React from 'react';

import './App.css';

import HeadComponent from './components/Head';
import Button from './components/Button';

const App: React.FC = () => {
  const title = 'Ahoy Sailor o/';

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div className='App'>
      <HeadComponent title={title} isActive={true} />
      <Button onClick={clickHandler}>
        <span>{title}</span>
      </Button>
    </div>
  );
};

export default App;
