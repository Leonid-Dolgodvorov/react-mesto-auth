import React from 'react'
import pencilImage from '../images/pencil.png'
import Card from './Card'
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ cards, onCardClick, onCardLike, onCardDelete, onEditAvatar, onEditProfile, onAddPlace }) {

  const currentUser = React.useContext(CurrentUserContext);

  const cardsElements = cards.map((card) => {
    return (
      <li className="card" key={card._id}>
        <Card 
          card={card}          
          onCardClick={onCardClick}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete} />
      </li>
    )          
  })

  return (
    <main className="page__main">
    <section className="profile section page__profile">
      <div className="profile__info">
        <div className="profile__avatar-edit" onClick={onEditAvatar}>
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
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
      </div>
      <button 
        className="profile__add-button" 
        type="button" 
        onClick={onAddPlace}
      />
    </section>
    <section className="elements section page__elements">
      <ul className="elements__list">
        {cardsElements}
      </ul>
    </section>
    </main>
  )
}

export default Main