import React from 'react';
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
// import DeleteConfirmPopup from './DeleteConfirmPopup'
import Register from "./Register";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";
import * as auth from "../utils/auth";

function App() {
  const [stateInfoTooltip, setStateInfoTooltip] = React.useState(false)
  const [statePopupAvatar, setStatePopupAvatar] = React.useState(false)
  const [statePopupProfile, setStatePopupProfile] = React.useState(false)
  const [statePopupAddPlace, setStatePopupAddPlace] = React.useState(false)
  // const [statePopupDelete, setStatePopupDelete] = React.useState(false)
  const [statePopupImage, setStatePopupImage] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({})
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([])
  const [loadingStatus, setLoadingStatus] = React.useState(false)
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [registrationResult, setRegistrationResult] = React.useState(false)
  const [email, setEmail] = React.useState("");
  const history = useHistory();

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .getData(jwt)        
        .then((res) => {          
          setLoggedIn(true);
          setEmail(res.data.email);
          history.push("/");
        })
        .then(() => {
          Promise.all([api.getUserInfo(), api.getInitialCards()])
          .then(([userInfo, cardList]) => {
            setCurrentUser(userInfo);
            setCards(cardList);
          })
          .catch((err) => {
            console.log(err)
          })
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }, [history, loggedIn])
    

  const handleCardClick = (card) => {
    setSelectedCard(card)
    setStatePopupImage(true)
  }

  const handleEditAvatar = () => {
    setStatePopupAvatar(true)
  }

  const handleEditProfile = () => {
    setStatePopupProfile(true)
  }

  const handleAddPlace = () => {
    setStatePopupAddPlace(true)
  }

  const handleUpdateUserInfo = (data) => {
    setLoadingStatus(true)
    api.editUserInfo(data)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
        setLoadingStatus(false)
      })
      .catch((err) => console.log(err));
  }

  const submitEditAvatar = (data) => {
    setLoadingStatus(true)
    api.editAvatar(data)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
        setLoadingStatus(false)
      })
      .catch((err) => console.log(err));
  };

  const closeAllPopups = () => {
    setStatePopupAvatar(false)
    setStatePopupProfile(false)
    setStatePopupAddPlace(false)
    setStatePopupImage(false)
    setSelectedCard({})
    // setStatePopupDelete(false)
    setStateInfoTooltip(false);
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards(cards => cards.filter((item) => item !== card));
      })
      .catch((err) => {
      console.log(err)
      })
  }

  const handleAddPlaceSubmit = (data) => {
    setLoadingStatus(true)
    api.addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
        setLoadingStatus(false)
      })
      .catch((err) => console.log(err));
  }

  const handleRegistration = (email, password) => {
    console.log(email, password)
    auth
      .register(email, password)
      .then(() => {
        setRegistrationResult(true);
        history.push("/sign-in");
      })
      .catch((e) => {
        console.log(e);

      })
      .finally(() => {
        setStateInfoTooltip(true);
      });
  };

  const handleAuthorization = (email, password) => {
    auth
      .authorize(email, password)
      .then((data) => auth.getData(data.token))
      .then((res) => {
        if (res) {
          setEmail(res.data.email);
          setLoggedIn(true);
        }
      })
      .catch((e) => {
        console.log(e);
      })
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/sign-in");
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
        <Header email={email} onSignOut={handleSignOut} />
        <Switch>
          <ProtectedRoute
            exact path="/"
            loggedIn={loggedIn}
            cards={cards}
            setCards={setCards}
            onEditAvatar={handleEditAvatar}
            onEditProfile={handleEditProfile}
            onAddPlace={handleAddPlace}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            component={Main}
          />
          <Route path="/sign-in">
            <Login onLogin={handleAuthorization} />
          </Route>
          <Route path="/sign-up">
            <Register onRegister={handleRegistration} />
          </Route>
          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/sign-in" />}
          </Route>
        </Switch>
        
        { loggedIn && <Footer /> }
        <EditAvatarPopup 
          isOpen={statePopupAvatar}
          onClose={closeAllPopups}
          onEditAvatar={submitEditAvatar}
          loadingStatus={loadingStatus}
        >      
        </EditAvatarPopup>

        <EditProfilePopup
          isOpen={statePopupProfile}
          onClose={closeAllPopups}
          onUpdateProfileInfo={handleUpdateUserInfo}
          loadingStatus={loadingStatus}
        >      
        </EditProfilePopup>

        <AddPlacePopup 
          isOpen={statePopupAddPlace}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          loadingStatus={loadingStatus}
        >
        </AddPlacePopup>

{/*         <DeleteConfirmPopup
          isOpen={statePopupDelete}
          onClose={closeAllPopups}
          loadingStatus={loadingStatus}
          confirmDeleteClick={handleCardDelete}
        >
        </DeleteConfirmPopup> */}

        <ImagePopup 
          isOpen={statePopupImage}
          onClose={closeAllPopups}
          card={selectedCard}
        />

        <InfoTooltip
          name='tooltip'
          isOpen={stateInfoTooltip}
          onClose={closeAllPopups}
          registrationResult={registrationResult}
        />
      </div>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
