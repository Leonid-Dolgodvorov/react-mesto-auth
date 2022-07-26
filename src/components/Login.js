import React from "react";

function Login({ onLogin }) {
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
    onLogin(email, password);
  }

  return (
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
        <button className="auth__submit-btn" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
