import React ,{Fragment} from 'react'

export default function InputBasic(props){
  
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
        onChange= {e=>props.setbasic(e.target.value)}
      />
      <label htmlFor="ot">Total Overtime (RM):</label>
      <input
      className='input_ot'
        type="number"
        name="ot_amount"
        id="ot"
        maxLength="8"
        placeholder="RM"
        onChange= {e=>props.setot(e.target.value)}
      />
      {props.salary>0 && <p className='total_salary'>Total Amount (RM):{props.salary}</p>}
      <button className="btn_cal" type="submit" onClick={(e)=>{e.preventDefault();props.calculate()}}>Calculate!</button>
      </Fragment>
    )
}
