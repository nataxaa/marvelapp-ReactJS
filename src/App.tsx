import React from 'react';
import { BuscarHeroi } from './components/buscarHeroi';
import { HomePage } from './components/HomePage';
import { SecondPage } from './components/SecondPage';
import './style/global.ts';

function App() {
  return (
    <div className="App">
    <HomePage/>
    <SecondPage/>
    <BuscarHeroi/>
    </div>
  );
}

export default App;
