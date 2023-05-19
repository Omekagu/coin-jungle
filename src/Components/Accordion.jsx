import React, { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion__container">
        <div
          className={`accordion__header ${isOpen ? 'open' : ''}`}
          onClick={toggleAccordion}
        >
          <div className="accordion__title">{title}</div>
          <div className="accordion__icon">{isOpen ? '-' : '+'}</div>
        </div>
        <div className={`accordion__content ${isOpen ? 'open' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
