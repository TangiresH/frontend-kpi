'use strict';

class TodoApi {
  static URL = 'https://62054479161670001741b708.mockapi.io/api/todo/';

  static getList() {
    return fetch(TodoApi.URL)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }

          throw new Error('Can not fetch todo list from server');
        });
  }

  static create(todo) {
    return fetch(TodoApi.URL, {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json',
      },
    })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }

          throw new Error('Can not create todo on server');
        });
  }

  static delete(id) {
    return fetch(TodoApi.URL + id, {
      method: 'DELETE',
    })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }

          throw new Error('Can not delete todo on server');
        });
  }
}
