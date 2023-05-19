import React from 'react';

const ButtonComp = ({ text, icon, customizedColor }) => {
  return (
    <button className={`buttonComp ${customizedColor}`}>
      <span className="buttonComp__img">
        <i className="buttonComp__icon">{icon}</i>
      </span>
      <span className="buttonComp__text">{text}</span>
    </button>
  );
};

export default ButtonComp;
