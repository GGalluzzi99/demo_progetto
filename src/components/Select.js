import React from "react";
import { options } from "../constants";
import "./Select.css";

const Select = ({ titleTable, changeFilter }) => {
  return (
    <label>
      Seleziona un'opzione:
      <select value={titleTable} onChange={changeFilter}>
        {options.map((el) => (
          <option value={el?.value}>{el?.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Select;
