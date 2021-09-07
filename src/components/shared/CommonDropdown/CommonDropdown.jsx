import React from "react";

const CommonDropdown = ({ options = [], onOptionChange = () => {} }) => {
  return (
    <div className="select-box">
      <select className="form-control" onChange={onOptionChange}>
        {options.map((op) => (
          <option value={op.value} key={op.value}>
            {op.text}
          </option>
        ))}
      </select>
    </div>
  );
};
export default CommonDropdown;
