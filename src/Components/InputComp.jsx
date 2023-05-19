import React from 'react';

const InputComp = ({ label, placeholder }) => {
  return (
    <div className="inputComp">
      <label htmlFor="label" className="inputComp__label">
        {label}
      </label>
      <input
        type="text"
        className="inputComp__input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComp;
