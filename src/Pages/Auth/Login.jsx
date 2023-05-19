import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import InputComp from '../../Components/InputComp';
import ButtonComp from '../../Components/ButtonComp';
import { Google, Apple } from '@mui/icons-material';

const Login = () => {
  return (
    <div className="login">
      <CloseIcon />
      <h4 className="login__text">
        Login to track your favorite coin easily 🚀
      </h4>
      <form className="login__form">
        <InputComp label={'Email'} placeholder={'email'} />
        <InputComp label={'password'} placeholder={'**********'} />

        <div className="login__flex">
          <div className="login__remember">
            <input type="checkbox" name="" id="" />
            <p>remember me</p>
          </div>
          <p className="login__forgot">
            <a href="1">forgot password?</a>{' '}
          </p>
        </div>

        <ButtonComp customizedColor={'submit'} text={'login'} />

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

      <div className="login__policy">
        <p className="login__policy--terms">
          By continuing, you agree to CoinJungle{' '}
          <a href="1">Terms of Service</a> and acknowledge you’ve read our{' '}
          <a href="1">Privacy Policy</a>
        </p>
        <p className="linebreak"></p>
        <p className="login__policy--noAcct">
          Don't have an account? <a href="1">Sign up</a>
        </p>
        <p className="login__policy--instructions">
          Didn't receive confirmation instructions?
          <p>
            <a href="1"> Resend confirmation instructions</a>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Login;
