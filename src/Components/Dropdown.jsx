import React from 'react';

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown__container">
        <ul className="dropdown__link">
          <li>
            <a href="1">About Coinjungle</a>{' '}
          </li>
          <li>
            <a href="2">Blog</a>{' '}
          </li>
          <li>
            <a href="3">Contact</a>{' '}
          </li>

          <li>
            <a href="4">Help</a>{' '}
          </li>
          <li>
            <a href="3">login</a>{' '}
          </li>
          <li>
            <a href="3">signin</a>{' '}
          </li>
          {/* <li>
            <ButtonComp title={'connect wallet'} />
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
