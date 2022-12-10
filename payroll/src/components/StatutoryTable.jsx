import React from 'react'

export default function StatutoryTable(props){
  console.log(props)
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
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>SOCSO</td>
        <td>{props.socsodeductions[0].employee}</td>
        <td>{props.socsodeductions[0].employer}</td>
        <td></td>
      </tr>
      <tr>
        <td>EIS</td>
        <td></td>
        <td></td>
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
}
