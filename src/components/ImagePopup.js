function ImagePopup({ isOpen, card, onClose }) {
  return (
    <div className={`
      popup 
      popup_type_image 
      popup_theme_dark 
      ${isOpen ? 'popup_opened' : ''} 
      `}>
      <div className="popup__image-on-screen">
        <img 
          className="popup__image" 
          alt={card.name} 
          src={card.link} 
        />
        <span className="popup__image-text">Картинка {card.name}</span>
        <button
          onClick={onClose}
          className="popup__close-button"
          type="button"
        />          
      </div>    
    </div>
  )
}

export default ImagePopup

