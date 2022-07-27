class Api {
  constructor( { url, headers } ) {
    this._url = url;
    this._headers = headers;
  }

  returnResJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._url}cards`, {
      headers: this._headers
    })
      .then(res => this.returnResJson(res))
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers
    })
      .then(res => this.returnResJson(res))
  }

  editUserInfo( {name, about }) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
    .then(res => this.returnResJson(res))
  }

  editAvatar(avatarLink) {
    return fetch(`${this._url}users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarLink
      })
    })
      .then(res => this.returnResJson(res))
  }

  addCard( { name, link }) {
    return fetch(`${this._url}cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(res => this.returnResJson(res))
  }

  deleteCard(cardId) {
    return fetch(`${this._url}cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this.returnResJson(res))
  }

  addLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => this.returnResJson(res))
  }

  deleteLike(cardId) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this.returnResJson(res))
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._url}cards/likes/${cardId}`, {
      method: `${isLiked ? 'PUT' : 'DELETE'}`,
      headers: this._headers
    })
    .then(res => this.returnResJson(res))
  }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-42/",
  headers: {
    "Content-Type": "application/json",
    authorization: "99d52bd8-e655-4215-bbec-aa898a3f57c0",
  },
});

export default api;