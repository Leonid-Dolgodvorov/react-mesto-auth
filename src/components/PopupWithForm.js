function PopupWithForm({ name, isOpen, onSubmit, title, children, onClose }) {
  return (
    <div className={`
      popup 
      popup_type_${name} 
      ${isOpen ? 'popup_opened' : ''} 
    `}>
    <div className="popup__container">
      <form className={`popup__form popup__form_type_${name}`} 
            name={`${name}`}
            onSubmit={onSubmit}>
        <h2 className="popup__title"> {`${title}`} </h2>
        {children}
      </form>
      <button 
        className="popup__close-button"
        onClick={onClose}
        type="button"
      />        
    </div>
  </div>
  )
}

export default PopupWithForm