import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Google, Apple } from '@mui/icons-material';
import InputComp from '../../Components/InputComp';
import ButtonComp from '../../Components/ButtonComp';

const SignUp = () => {
  return (
    <div className="signUp">
      <form className="signUp__form">
        <InputComp label={'Email'} placeholder={'email'} />
        <InputComp label={'password'} placeholder={'**********'} />

        <div className="signUp__flex">
          <div className="signUp__remember">
            <input type="checkbox" name="" id="" />
            <p>remember me</p>
          </div>
          <p className="signUp__forgot">
            <a href="1">forgot password?</a>{' '}
          </p>
        </div>

        <ButtonComp customizedColor={'submit'} text={'sign up'} />

        <h6 className="text-with-line">or</h6>
        <ButtonComp
          customizedColor={'apple'}
          icon={<Apple />}
          text={'continue with apple'}
        />
        <ButtonComp
          customizedColor={'goggle'}
          icon={<Google />}
          text={'continue with goggle'}
        />
      </form>

      <div className="signUp__policy">
        <CloseIcon />
        <h4 className="signUp__text">
          IT'S FREE, track your favorite coin in a single list 🚀
        </h4>
        <p className="linebreak"></p>
        <p className="signUp__policy--terms">
          By continuing, you agree to CoinJungle{' '}
          <a href="1">Terms of Service</a> and acknowledge you’ve read our{' '}
          <a href="1">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
