import React from 'react'
import pencilImage from '../images/pencil.png'
import Card from './Card'
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="page__main">
    <section className="profile section page__profile">
      <div className="profile__info">
        <div className="profile__avatar-edit" onClick={props.onEditAvatar}>
          <img 
            className="profile__avatar" 
            src={currentUser.avatar}
            alt="Аватар профиля" 
          />
          <div className="profile__avatar-overlay" style={{ backgroundImage: `url(${pencilImage})` }}></div>
        </div>
        <div className="profile__text">
          <div className="profile__name-edit">
            <h1 className="profile__name">{currentUser.name} </h1>
            <button 
              className="profile__edit" 
              type="button" 
              aria-label="Редактирование профиля"
              onClick={props.onEditProfile}
            />
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
      </div>
      <button 
        className="profile__add-button" 
        type="button" 
        onClick={props.onAddPlace}
      />
    </section>
    <section className="elements section page__elements">
      <ul className="elements__list">
        {props.cards.map((card) => {
          return (
            <Card 
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete} />
          )          
        })}
      </ul>
    </section>
    </main>
  )
}

export default Main