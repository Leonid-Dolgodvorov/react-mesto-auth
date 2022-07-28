import successImage from '../images/successImage.svg';
import failImage from '../images/failImage.svg';


function InfoTooltip({ name, isOpen, registrationResult, onClose }) {
  return (
    <div className={`
      popup 
      popup_type_${name} 
      ${isOpen ? 'popup_opened' : ''} 
    `}>
      <div className="popup__container popup__tooltip-wrapper">
        {registrationResult ? (
          <>
            <img
              src={`${successImage}`}
              alt="Вы успешно зарегистрировались!"
              className="popup__tooltip-image"
            />
            <p className="popup__tooltip-text">
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
            <p className="popup__tooltip-text">
              Что-то пошло не так. Попробуйте ещё раз!
            </p>
          </>
        )}


        <button 
          className="popup__close-button"
          onClick={onClose}
          type="button"
        />        
      </div>
    </div>
  )
}

export default InfoTooltip