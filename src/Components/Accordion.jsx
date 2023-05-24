import React, { useState } from 'react';

function Accordion() {
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
          <div className="accordion__title">resources</div>
          <div className="accordion__icon">{isOpen ? '-' : '+'}</div>
        </div>
        <div className={`accordion__content ${isOpen ? 'open' : ''}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia
          autem nihil? Consectetur voluptatum cumque deleniti itaque quis. Est,
          perspiciatis officia? Commodi ab perferendis repellat dignissimos.
          Nostrum quia quo eligendi.
        </div>
      </div>
      <div className="accordion__container">
        <div
          className={`accordion__header ${isOpen ? 'open' : ''}`}
          onClick={toggleAccordion}
        >
          <div className="accordion__title">resources</div>
          <div className="accordion__icon">{isOpen ? '-' : '+'}</div>
        </div>
        <div className={`accordion__content ${isOpen ? 'open' : ''}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia
          autem nihil? Consectetur voluptatum cumque deleniti itaque quis. Est,
          perspiciatis officia? Commodi ab perferendis repellat dignissimos.
          Nostrum quia quo eligendi.
        </div>
      </div>
      <div className="accordion__container">
        <div
          className={`accordion__header ${isOpen ? 'open' : ''}`}
          onClick={toggleAccordion}
        >
          <div className="accordion__title">resources</div>
          <div className="accordion__icon">{isOpen ? '-' : '+'}</div>
        </div>
        <div className={`accordion__content ${isOpen ? 'open' : ''}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia
          autem nihil? Consectetur voluptatum cumque deleniti itaque quis. Est,
          perspiciatis officia? Commodi ab perferendis repellat dignissimos.
          Nostrum quia quo eligendi.
        </div>
      </div>
      <div className="accordion__container">
        <div
          className={`accordion__header ${isOpen ? 'open' : ''}`}
          onClick={toggleAccordion}
        >
          <div className="accordion__title">resources</div>
          <div className="accordion__icon">{isOpen ? '-' : '+'}</div>
        </div>
        <div className={`accordion__content ${isOpen ? 'open' : ''}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia
          autem nihil? Consectetur voluptatum cumque deleniti itaque quis. Est,
          perspiciatis officia? Commodi ab perferendis repellat dignissimos.
          Nostrum quia quo eligendi.
        </div>
      </div>
      <div className="accordion__container">
        <div
          className={`accordion__header ${isOpen ? 'open' : ''}`}
          onClick={toggleAccordion}
        >
          <div className="accordion__title">resources</div>
          <div className="accordion__icon">{isOpen ? '-' : '+'}</div>
        </div>
        <div className={`accordion__content ${isOpen ? 'open' : ''}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia
          autem nihil? Consectetur voluptatum cumque deleniti itaque quis. Est,
          perspiciatis officia? Commodi ab perferendis repellat dignissimos.
          Nostrum quia quo eligendi.
        </div>
      </div>
      <div className="accordion__container">
        <div
          className={`accordion__header ${isOpen ? 'open' : ''}`}
          onClick={toggleAccordion}
        >
          <div className="accordion__title">resources</div>
          <div className="accordion__icon">{isOpen ? '-' : '+'}</div>
        </div>
        <div className={`accordion__content ${isOpen ? 'open' : ''}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia
          autem nihil? Consectetur voluptatum cumque deleniti itaque quis. Est,
          perspiciatis officia? Commodi ab perferendis repellat dignissimos.
          Nostrum quia quo eligendi.
        </div>
      </div>
    </div>
  );
}

export default Accordion;
