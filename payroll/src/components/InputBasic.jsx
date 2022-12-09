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
        onChange= {e=>props.salary(e.target.value)}
      />
      <label htmlFor="ot">Total Overtime (RM):</label>
      <input
      className='input_ot'
        type="number"
        name="ot_amount"
        id="ot"
        maxLength="8"
        placeholder="RM"
        onChange= {e=>props.ot(e.target.value)}
      />
      <button className="btn_cal" type="submit" onClick={()=>props.calculate()}>Calculate!</button>
      </Fragment>
    )
}
