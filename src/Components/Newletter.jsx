import React from 'react';
import InputComp from './InputComp';
import ButtonComp from './ButtonComp';

const Newletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__textbox">
        <h4 className="newsletter__question">
          Interested to stay up-to-date with cryptocurrencies?
        </h4>
        <p className="newsletter__text">
          Get the latest crypto news, updates, and reports by subscribing to our
          free newsletter.
        </p>
      </div>

      <div className="newsletter__input">
        <InputComp placeholder={'placeholder'} />
        <ButtonComp customizedColor={'submit'} text={'subscribe'} />
      </div>
    </div>
  );
};

export default Newletter;
