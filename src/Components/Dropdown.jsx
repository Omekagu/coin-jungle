import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="login">login</Link>{' '}
          </li>
          <li>
            <Link to="signup">signin</Link>{' '}
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
