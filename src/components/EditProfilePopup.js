import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [profileInfo, setProfileInfo] = React.useState({});

  React.useEffect(() => {
    setProfileInfo({ name: currentUser.name, job: currentUser.about });
  }, [currentUser, props.isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateProfileInfo({
      name: profileInfo.name,
      about: profileInfo.job,
    });
  }

  return (
    <PopupWithForm 
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <>
        <div className="popup__input-wrapper">
          <input 
            id="name" 
            className="popup__input popup__input_type_name" 
            type="text" 
            name="name" 
            placeholder="Введите ФИО" 
            autoComplete="off" 
            minLength="2" 
            maxLength="40" 
            required
            value={profileInfo.name || ''}
            onChange={handleChange}
          />
           <span className="popup__error popup__error_type_name"></span>
        </div>
        <div className="popup__input-wrapper">
          <input 
            id="job"
            className="popup__input popup__input_type_job"
            type="text"
            name="job"
            placeholder="Введите описание"
            autoComplete="off"
            minLength="2"
            maxLength="200"
            required
            value={profileInfo.job || ''}
            onChange={handleChange}
          />
          <span className="popup__error popup__error_type_job"></span>
        </div>
        <button
          className="popup__save-button" 
          type="submit"
        >
          {props.isLoading ? 'Сохранение...' : 'Сохранить'}
        </button>
      </>
    </PopupWithForm >
  );
}

export default EditProfilePopup;