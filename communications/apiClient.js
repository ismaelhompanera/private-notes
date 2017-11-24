import Vue from 'vue'

export function getNote (id) {
  const url = 'note/' + id
  return _get(url)
}

export function saveNote (id, note) {
  const url = `note/${id}/${note}/`
  return _save(url)
}

export function deleteNote (id) {
  const url = 'note/' + id
  return _delete(url)
}

function _save (url) {
  return new Promise((resolve, reject) => {
    Vue.http.post(url)
      .then((response) => {
        resolve(response.body)
      })
      .catch(e => {
        reject(e)
      })
  })
}

function _get (url) {
  return new Promise((resolve, reject) => {
    Vue.http.get(url)
      .then((response) => {
        resolve(response.body)
      })
      .catch(e => {
        reject(e)
      })
  })
}

function _delete (url) {
  return new Promise((resolve, reject) => {
    Vue.http.delete(url)
      .then((response) => {
        resolve(response.body)
      })
      .catch(e => {
        reject(e)
      })
  })
}
