function PopupWithForm(props) {
  return (
    <div className={`
      popup 
      popup_type_${props.name} 
      ${props.isOpen ? 'popup_opened' : ''} 
    `}>
    <div className="popup__container">
      <form className={`popup__form popup__form_type_${props.name}`} 
            name={`${props.name}`}
            onSubmit={props.onSubmit}>
        <h2 className="popup__title"> {`${props.title}`} </h2>
        {props.children}
      </form>
      <button 
        className="popup__close-button"
        onClick={props.onClose}
        type="button"
      />        
    </div>
  </div>
  )
}

export default PopupWithForm