import React from 'react';

import './App.css';

import HeadComponent from './components/Head';
import Button from './components/Button';

const App: React.FC = () => {
  const title = 'Ahoy Sailor o/';

  const clickHandler = () => {
    console.log(title);
  };

  return (
    <div className='App'>
      <HeadComponent title={title} isActive={true} />
      <Button onClick={clickHandler} />
    </div>
  );
};

export default App;
