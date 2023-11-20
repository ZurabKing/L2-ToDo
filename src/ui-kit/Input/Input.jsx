import React from "react";

export const Input = ({ title, ...rest }) => {
  return (
    <label>
      {title}
      <input {...rest} />
    </label>
  );
};
