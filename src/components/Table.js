import React from "react";
import { EMPLOYEE_PROJECT, columnHeaders } from "../constants";
import "./Table.css";

const Table = ({ titleTable, tableContent }) => {
  return (
    <table>
      <thead>
        <tr>
          {columnHeaders[titleTable].map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {titleTable !== EMPLOYEE_PROJECT
          ? tableContent.map((item, index) => (
              <tr key={index}>
                {item?.projectName ? <td>{item.projectName}</td> : null}
                {item.employeeName ? <td>{item.employeeName}</td> : null}
                {item.date ? <td>{item.date}</td> : null}
                {item.hours ? <td>{item.hours}</td> : null}
              </tr>
            ))
          : tableContent.map((item, index) => (
              <tr key={index}>
                <td>{item.employeeName}</td>
                <td>{item.projectName}</td>
                <td>{item.hours}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};

export default Table;
