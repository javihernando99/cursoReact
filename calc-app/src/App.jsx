// importacion
import React from 'react';
import Button from './components/Button';
import Result from './components/Result';
import './App.css';
// generacion de la funcion del componente
const App = () => {
  const clickHandlerFunction= text =>{console.log(text)};

  return (<main className='react-calculator'>
    <Result value={'0'}></Result>
    <Button text="1" clickHandler={clickHandlerFunction}></Button>
  </main>);
};

export default App;
// exportacion
