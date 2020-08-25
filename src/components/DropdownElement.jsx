import React, { useState, useEffect } from "react";

const DropdownElement = (props) => {
  const { dropdownLabel, options } = props;
  const [selectedValue, updateSelectedValue] = useState(options[0]);

  useEffect(() => {
    console.log(`Dropdown Label: ${dropdownLabel}\nValue: ${selectedValue}`);
  }, [dropdownLabel, selectedValue]);

  return (
    <>
      <label htmlFor={dropdownLabel}>{dropdownLabel}</label>
      <select
        id={dropdownLabel}
        value={selectedValue}
        onChange={(e) => updateSelectedValue(e.target.value)}
        onBlur={(e) => updateSelectedValue(e.target.value)}
        disabled={!options.length}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownElement;
