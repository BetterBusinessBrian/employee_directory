import React, { Component } from 'react';
import TableData from "./TableData"

const Table = props => {
    return (<table>
        <tbody>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
        </tr>
        {props.employees.map(employee => {
            return <TableData employee={employee} />
        })}
        </tbody>
    </table>
    )
}

export default Table;