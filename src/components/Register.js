import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(values.password, values.email);
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
          value={values.email || ""}
          onChange={handleChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Пароль"
          autoComplete="off"
          required
          value={values.password || ""}
          onChange={handleChange}
        />
        <button className="auth__form-submit-btn auth__form-submit-btn_size" type="submit">
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