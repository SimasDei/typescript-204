import React from 'react';

import './App.css';

import HeadComponent from './components/Head';
import Button from './components/Button';
import Input from './components/Input';
import ReducerButton from './components/ReducerButton';
import BigC from './components/BigC';

const App: React.FC = () => {
  const title = 'Ahoy Sailor o/';

  const clickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div className='App'>
      <HeadComponent title={title} isActive={true} />
      <BigC title={'Ahoy Sailor o/'} />
      <Input />
      <Button onClick={clickHandler}>
        <span>{title}</span>
      </Button>
      <ReducerButton />
    </div>
  );
};

export default App;
