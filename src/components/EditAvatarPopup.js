import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onEditAvatar, onClose, loadingStatus }) {
  const avatarRef = React.useRef(null);

  React.useEffect(()=> {
    avatarRef.current.value = '';
  },[isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    onEditAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-wrapper">
        <input 
          id="avatar"
          className="popup__input popup__input_type_avatar-link"
          type="url" 
          name="avatar"
          placeholder="Ссылка на картинку"
          autoComplete="off" 
          required
          ref={avatarRef}
        />
        <span id="avatar-error" className="popup__error popup__error_type_avatar"></span>
      </div>
      <button 
        className="popup__save-button" 
        type="submit"
      >
        {loadingStatus ? 'Сохранение...' : 'Сохранить'}
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;