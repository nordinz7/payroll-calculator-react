import React ,{Fragment,useState,useEffect} from 'react'

export default function InputBasic(props){
  const [basic,setBasic]=useState(0)
  const [ot,setOt]=useState(0)
  useEffect(()=>console.log(`Basic Salary: ${basic}, OT: ${ot}`),[basic,ot])
    return(
        <Fragment>
      <label htmlFor="basic">Basic Salary + Fixed Allowance (RM):</label>
      <input
      className='input_basic'
        type="number"
        name="basic_salary"
        id="basic"
        maxLength="8"
        placeholder="RM"
        onChange= {e=>setBasic(e.target.value)}
      />
      <label htmlFor="ot">Total Overtime (RM):</label>
      <input
      className='input_ot'
        type="number"
        name="ot_amount"
        id="ot"
        maxLength="8"
        placeholder="RM"
        onChange= {e=>setOt(e.target.value)}
      />
      <button className="btn_cal" type="submit" onClick={()=>props.calculate()}>Calculate!</button>
      </Fragment>
    )
}
