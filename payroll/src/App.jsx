import './App.css';
import StatutoryTable from './components/StatutoryTable';
import InputBasic from "./components/InputBasic";
import Navbar from './components/Navbar'
import React from 'react'

function App() {
  

  function getData(){
    console.log('clicked Calculate!!!')
  }

  
  return (
    <div className="App">
      <Navbar/>
      <InputBasic  calculate={getData}/>
      <StatutoryTable/>
    </div>
  );
}

export default App;
