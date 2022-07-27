import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(email, password);
  }

  return (
    <section className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          required
          value={email || ""}
          onChange={handleEmailChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Пароль"
          autoComplete="off"
          required
          value={password || ""}
          onChange={handlePasswordChange}
        />
        <button className="auth__submit-btn " type="submit">
          Зарегистрироваться
        </button>
        <div className="auth__wrapper">
          <p className="auth__text">Уже зарегистрированы?</p>
          <Link 
            to="sign-in" 
            className="auth__link"
          >
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;