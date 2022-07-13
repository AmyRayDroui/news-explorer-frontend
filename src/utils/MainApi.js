class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
  
    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
    }
  
    setHeader(token) {
        this._headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    signup( email, password, name ) {
        return fetch(`${this._baseUrl}/signup`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify({ password, email, name }),
        })
          .then(res => this._checkResponse(res));
    }; 

    signin( email, password ) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({ email, password }),
        })
            .then(res => this._checkResponse(res));
    };

    checkTokenValidity( jwt ) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${jwt}`
            }
        })
            .then(res => this._checkResponse(res));
    };
  
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
      }).then(res => this._checkResponse(res));
    }

  
    getUserArticles() {
      return fetch(`${this._baseUrl}/articles`, {
        headers: this._headers
      }).then(res => this._checkResponse(res));
    }
  
    addNewArticle(data) {
      return fetch(`${this._baseUrl}/articles`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      }).then(res => this._checkResponse(res));
    }
  
    removeArticle(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      }).then(res => this._checkResponse(res));
    }
  }
  
  const mainApi = new Api({
    baseUrl: "http://localhost:3001",//"https://api.amyexplorer.students.nomoreparties.sbs",
    headers: {
      "Content-Type": "application/json",
      "Authorization": ''
    }
  }); 
  
  export default mainApi;