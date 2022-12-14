import React from 'react'

export default function StatutoryTable(props){
  const socso = !props.socsodeductions?0:props.socsodeductions[0];
  const eis = !props.eisdeductions?0:props.eisdeductions[0];
  const epf = !props.epfdeductions?0:props.epfdeductions[0];
  
    return (
    <table className="styled-table">
      <caption className='title-table'>Statutory Contribution & Deductions</caption>
      <thead>
      <tr >
        <th></th>
        <th>Employee</th>
        <th>Employer</th>
        <th>Sub-Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>EPF</td>
        <td>{epf && epf.employee}</td>
        <td>{epf && epf.employer}</td>
        <td>{epf && epf.employee+epf.employer}</td>
      </tr>
      <tr>
        <td>SOCSO</td>
        <td>{socso.employee}</td>
        <td>{socso.employer}</td>
        <td>{socso.employee+socso.employer}</td>
      </tr>
      <tr>
        <td>EIS</td>
        <td>{eis.employee}</td>
        <td>{eis.employer}</td>
        <td>{eis.employee+eis.employer}</td>
      </tr>
      <tr>
        <td>TAX/LHDN</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>ZAKAT</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>DEDUCTIONS</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className='active-row'>
        <td>TOTAL:</td>
        <td>{Number((epf?epf.employee:0)+socso.employee+eis.employee).toFixed(2)}</td>
        <td>{Number((epf?epf.employer:0)+socso.employer+eis.employer).toFixed(2)}</td>
        <td>{Number((epf?epf.employee:0)+socso.employee+eis.employee + (epf?epf.employer:0)+socso.employer+eis.employer).toFixed(2)}</td>
      </tr>
    </tbody>
    </table>
    )
  
};