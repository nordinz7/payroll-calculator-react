import React ,{Fragment} from 'react'

export default function InputBasic(){

    return(
        <Fragment>
      <label for="basic">Basic Salary + Fixed Allowance (RM):</label>
      <input
      className='input_basic'
        type="number"
        name="basic_salary"
        id="basic"
        maxlength="8"
        placeholder="RM"
        onChange= {e=>console.log(e.target.value)}
      />
      <label for="ot">Total Overtime (RM):</label>
      <input
      className='input_ot'
        type="number"
        name="ot_amount"
        id="ot"
        maxlength="8"
        placeholder="RM"
      />
      <button className="btn_cal" type="submit">Calculate!</button>
      </Fragment>
    )
}
