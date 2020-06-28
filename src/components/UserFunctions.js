import axios from 'axios'

export const register = newUser => {
    return axios
      .post('/signup', {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        proff  : newUser.proff
      })
      .then(response => {
        console.log('Registered')
      })
  }

  export const login = user => {
    return axios
      .post('/login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }