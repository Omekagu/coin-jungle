import React, { useState } from 'react';

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={`toggle-button ${isActive ? 'active' : ''}`}
      onClick={handleToggle}
    >
      <div className="slider"></div>
    </div>
  );
};

export default ToggleButton;
