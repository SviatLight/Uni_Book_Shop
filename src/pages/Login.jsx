import React from 'react';
import './Login.css';
import GoogleIcon from '../assets/img/google-icon.png';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => {
  return (
    <div className="auth__wrapper">
      <div className="auth">
        <div className="auth__header">
          <h2>Увійти в інтернет-магазин</h2>
        </div>
        <div className="auth__email">
          <Input
            placeholder="Введіть пошту"
            labelTitle="Пошта"
            type="text"
            inputClass="auth__input"
            divClass="input__div"
            labelClass="input__lable"
          />
        </div>
        <div className="auth__password">
          <Input
            placeholder="Введіть пароль"
            labelTitle="Пароль"
            type="password"
            inputClass="auth__input"
            divClass="input__div"
            labelClass="input__lable"
          />
        </div>
        <div className="auth__button">
          <Button title="Увійти" btnClass="in-out__button" />
        </div>
        <div className="auth__another">
          <p>Авторизуватися за допомогою Google</p>
          <img src={GoogleIcon} alt="google icon" className="google__icon" />
          <p>Або зареєструйтеся</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
