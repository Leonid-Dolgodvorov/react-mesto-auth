import PopupWithForm from "./PopupWithForm";

function ConfirmDeletePopup(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCardDelete(props.card);
  };

  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.handleSubmit}
    >
      <button 
        className="popup__save-button" 
        type="submit" 
      >
        {props.isLoading ? 'Удаление...' : 'Да'}
      </button>
    </PopupWithForm>
  );
}

export default ConfirmDeletePopup