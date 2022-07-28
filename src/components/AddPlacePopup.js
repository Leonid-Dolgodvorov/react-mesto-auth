import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onAddPlace, onClose, loadingStatus }) {

  const [placeInfo, setPlaceInfo] = React.useState({});

  React.useEffect(() => {
    if (isOpen) {setPlaceInfo({ place: "", link: "" })}
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPlaceInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name: placeInfo.place,
      link: placeInfo.link,
    });
  }

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-wrapper">
          <input 
            id="place"
            className="popup__input popup__input_type_place"
            type="text"
            name="place"
            placeholder="Название"
            autoComplete="off"
            minLength="2"
            maxLength="30"
            required
            value={placeInfo.place || ''}
            onChange={handleChange}
          />
          <span className="popup__error popup__error_type_place"></span>
        </div>
        <div className="popup__input-wrapper">
          <input 
            id="link"
            className="popup__input popup__input_type_place-link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            autoComplete="off"
            required
            value={placeInfo.link || ''}
            onChange={handleChange}
          />
          <span id="link-error" className="popup__error popup__error_type_link"></span>
        </div>
        <button 
          className="popup__save-button" 
          type="submit"
        >
          {loadingStatus ? 'Сохранение...' : 'Создать'}
        </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
