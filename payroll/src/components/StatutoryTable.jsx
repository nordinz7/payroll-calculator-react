import React from 'react'

export default function StatutoryTable(props){
  const socso = !props.socsodeductions?0:props.socsodeductions[0];
  const eis = !props.eisdeductions?0:props.eisdeductions[0];
  const epf = !props.epfdeductions?0:props.epfdeductions[0];
  
    return (
    <table className="statutory-table">
      <caption>Statutory Contribution & Deductions</caption>
      <thead>
      <tr>
        <th></th>
        <th>Employee</th>
        <th>Employer</th>
        <th>Sub-Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>EPF</td>
        <td>{epf.employee}</td>
        <td>{epf.employer}</td>
        <td></td>
      </tr>
      <tr>
        <td>SOCSO</td>
        <td>{socso.employee}</td>
        <td>{socso.employer}</td>
        <td></td>
      </tr>
      <tr>
        <td>EIS</td>
        <td>{eis.employee}</td>
        <td>{eis.employer}</td>
        <td></td>
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
      <tr>
        <td>TOTAL:</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
    </table>
    )
  
};