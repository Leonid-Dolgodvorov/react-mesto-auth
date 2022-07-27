function ImagePopup(props) {
  return (
    <div className={`
      popup 
      popup_type_image 
      popup_theme_dark 
      ${props.isOpen ? 'popup_opened' : ''} 
      `}>
      <div className="popup__image-on-screen">
        <img 
          className="popup__image" 
          alt={props.card.name} 
          src={props.card.link} 
        />
        <span className="popup__image-text">Картинка {props.card.name}</span>
        <button
          onClick={props.onClose}
          className="popup__close-button"
          type="button"
        />          
      </div>    
    </div>
  )
}

export default ImagePopup

