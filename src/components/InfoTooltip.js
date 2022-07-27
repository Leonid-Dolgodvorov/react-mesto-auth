import successImage from '../images/successImage.svg';
import failImage from '../images/failImage.svg';


function InfoTooltip(props) {
  return (
    <div className={`
      popup 
      popup_type_${props.name} 
      ${props.isOpen ? 'popup_opened' : ''} 
    `}>
      <div className="popup__container">
        {props.registrationResult ? (
          <>
            <img
              src={`${successImage}`}
              alt="Вы успешно зарегистрировались!"
              className="popup__tooltip-image"
            />
            <p className="popup__tooltip-message">
              Вы успешно зарегистрировались!
            </p>
          </>
        ) : (
          <>
            <img
              src={`${failImage}`}
              alt="Что-то пошло не так. Попробуйте ещё раз!"
              className="popup__tooltip-image"
            />
            <p className="popup__tooltip-message">
              Что-то пошло не так. Попробуйте ещё раз!
            </p>
          </>
        )}


        <button 
          className="popup__close-button"
          onClick={props.onClose}
          type="button"
        />        
      </div>
    </div>
  )
}

export default InfoTooltip