import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const currentUser = ref(null)
  const isLoggedIn = ref(false)

  const loadUsersFromLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    return users
  }

  const saveUsersToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users))
  }

  const checkAuth = () => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'))
    if (storedUser) {
      currentUser.value = storedUser
      isLoggedIn.value = true
    }
  }

  const register = (name, email, password) => {
    const users = loadUsersFromLocalStorage()
    const existingUser = users.find(user => user.email === email)

    if (existingUser) {
      throw new Error('User already exists')
    }

    const newUser = { name, email, password }
    users.push(newUser)
    saveUsersToLocalStorage(users)
    login(email, password)
  }

  const login = (email, password) => {
    const users = loadUsersFromLocalStorage()
    const user = users.find(user => user.email === email && user.password === password)

    if (!user) {
      throw new Error('Invalid credentials')
    }

    currentUser.value = user
    isLoggedIn.value = true
    localStorage.setItem('currentUser', JSON.stringify(user))
  }

  const logout = () => {
    currentUser.value = null
    isLoggedIn.value = false
    localStorage.removeItem('currentUser')
  }

  return { currentUser, isLoggedIn, register, login, logout, checkAuth }
})
