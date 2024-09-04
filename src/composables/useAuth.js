import { useAuthStore } from '../stores/auth.js'

export function useAuth() {
  const authStore = useAuthStore()

  const register = async (name, email, password) => {
    try {
      await authStore.register(name, email, password)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const login = async (email, password) => {
    try {
      await authStore.login(email, password)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const logout = () => {
    authStore.logout()
  }

  return { register, login, logout, isLoggedIn: authStore.isLoggedIn, currentUser: authStore.currentUser }
}
