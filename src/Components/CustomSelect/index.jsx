import React from "react";
import Select from "react-select";

export default function CustomSelect({ value, options, ...props }) {
  let findValue = options.find((opt) => opt.value === value) || null;
  return <Select value={findValue} options={options} {...props} />;
}
