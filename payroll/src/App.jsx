import './App.css';
import StatutoryTable from './components/StatutoryTable';
import InputBasic from "./components/InputBasic";
import Navbar from './components/Navbar'
import React, {useState, useEffect} from 'react'
import socso from './data/socso.js';
import eis from './data/eis'
import epf from './data/epf'



function App() {
  const [basic,setBasic]=useState(0)
  const [ot,setOt]=useState(0)
  const [total,setTotal]=useState(0)
  const [socsoTable,setSocsoTable]=useState(0)
  const [eisTable,setEisTable]=useState(0)
  const [epfTable,setEpfTable]=useState(0)
  
  function getData(){
    console.log('clicked Calculate!!!')
    getSocso();
    getEis();
    getEpf();
  }

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

         function getEis(salary=total){
          console.log('geteis: ',salary)
          const salaryLimit = salary>5000 ? 5000: salary
          const wages =eis.map(i=>i.wage)
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
          console.log('closest eis:',closest);
          console.log( eis.filter(item=>item.wage===closest));
          setEisTable(prev=>eis.filter(item=>item.wage===closest))
       }

       function getEpf(salary=total){
        console.log('getepf: ',salary)
        const salaryLimit =  salary
        const wages =epf.map(i=>i.wage)
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
        console.log('closest epf:',closest);
        console.log( epf.filter(item=>item.wage===closest));
        const epfExceedLimit = salary>20000 ? [{employee: salary*0.11, employer:salary*0.12}]:epf.filter(item=>item.wage===closest);
        setEpfTable(prev=> epfExceedLimit)
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
      <StatutoryTable socsodeductions={socsoTable} eisdeductions={eisTable} epfdeductions={epfTable}/>
    </div>
  );
}

export default App;
