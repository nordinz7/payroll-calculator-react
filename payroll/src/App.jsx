import './App.css';
import StatutoryTable from './components/StatutoryTable';
import InputBasic from "./components/InputBasic";
import Navbar from './components/Navbar'
import React, {useState, useEffect} from 'react'
import socso from './data/socso.js';
import eis from './data/eis'



function App() {
  const [basic,setBasic]=useState(0)
  const [ot,setOt]=useState(0)
  const [total,setTotal]=useState(0)
  const [socsoTable,setSocsoTable]=useState({})
  const [eisTable,setEisTable]=useState({})
  
  function getData(){
    console.log('clicked Calculate!!!')
  
  
  function getSocso(salary=total){
    console.log('getsocso: ',salary)
    const salaryLimit = salary>5000 ? 5000: salary
    const wages =socso.map(i=>i.wage)
    const closest = wages.reduce((a, b) => {
      let aDiff = Math.abs(a - salaryLimit);
      let bDiff = Math.abs(b - salaryLimit);
  
      if (aDiff === bDiff) {
          // Choose largest vs smallest (> vs <)
          return a > b ? a : b;
      } else {
          return bDiff < aDiff ? b : a;
      }
     
      });
  console.log('closest',closest);
  console.log( socso.filter(item=>item.wage===closest));
  setSocsoTable(prev=>socso.filter(item=>item.wage===closest))

  }
}
  useEffect(()=>{
    // console.log(`Basic Salary: ${basic}, OT: ${ot}, Total: ${total}`);
    setTotal(Number(basic)+Number(ot))
    }
    ,[basic,ot,total])

  return (
    <div className="App">
      <Navbar/>
      <InputBasic  calculate={getData} salary={setTotal} setbasic={setBasic} setot={setOt}/>
      <StatutoryTable socsodeductions={socsoTable}/>
    </div>
  );
}

export default App;
