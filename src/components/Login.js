import React from "react";

function Login(props) {
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
    props.onLogin(values.password, values.email);
  }

  return (
    <>      
      <section className="section auth">
        <h2 className="auth__title">Вход</h2>
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
          <button className="auth__submit-btn" type="submit">
            Войти
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;
