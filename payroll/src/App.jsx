import './App.css';
import StatutoryTable from './components/StatutoryTable';
import InputBasic from "./components/InputBasic";
import Navbar from './components/Navbar'
import React, {useEffect, useState}from 'react'

function App() {
  const [basic,setBasic]=useState(0)
  const [ot,setOt]=useState(0)

  function getData(){
    console.log('clicked Calculate!!!')
  }

  useEffect(()=>console.log(`Basic Salary: ${basic}, OT: ${ot}`),[basic,ot])
  return (
    <div className="App">
      <Navbar/>
      <InputBasic salary={setBasic} ot={setOt} calculate={getData}/>
      <StatutoryTable/>
    </div>
  );
}

export default App;
