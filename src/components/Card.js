import React from 'react'
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? '' : 'card__delete-button_hidden'}`
  ); 

  const cardLikeButtonClassName = (
    `card__like-button ${isLiked ? 'card__like-button_yes' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card)
  }

  function handleDeleteCard() {
    props.onCardDelete(props.card)
  }

  return (
    <li className="card">
      <button
        onClick={handleDeleteCard}
        className={cardDeleteButtonClassName} 
        type="button"
      >
      </button>
      <img
        onClick={handleClick}
        className="card__pic" 
        alt={`картинка ${props.card.name}`} 
        src={props.card.link} />
      <div className="card__text">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__likes-wrapper">
          <button
            onClick={handleLikeClick}
            className={cardLikeButtonClassName}
            type="button"
          />
          <p className="card__likes-quantity">{props.card.likes.length}</p>
        </div>
      </div>        
    </li>
  )
}

export default Card