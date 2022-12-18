import './App.css';
import StatutoryTable from './components/StatutoryTable';
import InputBasic from "./components/InputBasic";
import Navbar from './components/Navbar'
import React, {useState, useEffect, useMemo} from 'react'
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
  const [showStatutoryTable,setshowStatutoryTable]=useState(false)
  // const [employeePortion,setEmployeePortion]=useState(0)

  const employeePortion = useMemo(function getTotalEmployeePortion(){
    console.log('getTotalEmployeePortion')
      if (epfTable!==0){
      const arrObjStatutory = [epfTable[0],eisTable[0],socsoTable[0]];
      console.log(arrObjStatutory.map(i=>i.employee).reduce((acc,curr)=>acc+curr));
      return arrObjStatutory.map(i=>i.employee).reduce((acc,curr)=>acc+curr)
      // setEmployeePortion(prev=>arrObjStatutory.map(i=>i.employee).reduce((acc,curr)=>acc+curr))
    } 
   },[showStatutoryTable]) 


  useEffect(()=>{
    // console.log(`Basic Salary: ${basic}, OT: ${ot}, Total: ${total}`);
    setTotal(prev=>Number(basic)+Number(ot));
    }
    ,[basic,ot])
  
  function getData(){
    console.log('clicked Calculate!!!')
    if (total>0){
       getSocso();
       getEis();
       getEpf();
       setshowStatutoryTable(prev=>!prev);
    };
  };

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

       function getEpf(salary=basic){
        console.log('getepf: ',salary)
        if (salary<=0){
          return;
        }
        const salaryLimit =  salary
        const wages =epf.map(i=>i.wage)
        console.log(epf.map(i=>Math.abs(i.wage-salaryLimit)))
        const closest = wages.reduce((a, b) => {
          return salaryLimit >= a && salaryLimit <b ? a : b;
        });
        console.log('closest epf:',closest);
        console.log( epf.filter(item=>item.wage===closest));
        const epfExceedLimit = salary>20000 ? [{employee: salary*0.11, employer:salary*0.12}]:epf.filter(item=>item.wage===closest);
        setEpfTable(prev=> epfExceedLimit)
     }

      

  return (
    <div className="App">
      <Navbar/>
      <InputBasic  calculate={getData} salary={total} setbasic={setBasic} setot={setOt}/>
      { showStatutoryTable && total>0 && <StatutoryTable socsodeductions={socsoTable} eisdeductions={eisTable} epfdeductions={epfTable}/>}
      {showStatutoryTable && total>0 && <p className='nett_pay'>Nett Pay (RM): {total-employeePortion}</p>}
      <p className='info'>This App is still at development stage. For now, this app calculation is confined to EPF (11%) First Category, Socso First Category (Invalidity and Injury Scheme) and EIS contribution</p>
    </div>
  );
}

export default App;
