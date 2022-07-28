import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup({ onCardDelete, isOpen, onClose, loadingStatus }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onCardDelete(card);
  };

  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <button 
        className="popup__save-button" 
        type="submit" 
      >
        {loadingStatus ? 'Удаление...' : 'Да'}
      </button>
    </PopupWithForm>
  );
}

export default ConfirmDeletePopup