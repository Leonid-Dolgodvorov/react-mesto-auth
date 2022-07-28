import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import headerLogoPath from '../images/header-logo.svg';

function Header({ email, onSignOut }) {
  return (
    <header className="header section page__header">
      <img className="header__logo" src={headerLogoPath} alt="логотип Mesto" />
      <Switch>
        <Route exact path="/sign-in">
          <Link 
            to="/sign-up" 
            className="header__link"
          >
            Регистрация
          </Link>
        </Route>
        <Route exact path="/sign-up">
          <Link 
            to="/sign-in" 
            className="header__link"
          >
            Войти
          </Link>
        </Route>
        <Route exact path="/">
          <div className="header__wrapper">
            <p className="header__email">{email}</p>
            <Link 
              to='/sign-in' 
              className="header__link" 
              onClick={onSignOut}
            >
              Выйти
            </Link>
          </div>          
        </Route>
      </Switch>
    </header>
  )
}

export default Header