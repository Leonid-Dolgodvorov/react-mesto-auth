import React from 'react'
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;

  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? '' : 'card__delete-button_hidden'}`
  ); 

  const cardLikeButtonClassName = (
    `card__like-button ${isLiked ? 'card__like-button_yes' : ''}`
  );

  function handleImageClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteCard() {
    onCardDelete(card)
  }

  return (
    <>
      <button
        onClick={handleDeleteCard}
        className={cardDeleteButtonClassName} 
        type="button"
      >
      </button>
      <img
        onClick={handleImageClick}
        className="card__pic" 
        alt={`картинка ${card.name}`} 
        src={card.link} />
      <div className="card__text">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__likes-wrapper">
          <button
            onClick={handleLikeClick}
            className={cardLikeButtonClassName}
            type="button"
          />
          <p className="card__likes-quantity">{card.likes.length}</p>
        </div>
      </div>        
    </>
  )
}

export default Card