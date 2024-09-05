<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 class="text-5xl font-bold mb-20 text-center">Login</h1>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <div class="mb-10">
          <label for="email" class="font-bold block mb-2">Email:</label>
          <input
            v-model="email"
            id="email"
            type="email"
            class="w-full p-2 bg-transparent border-2 rounded-md outline-none transition-colors"
            :class="emailError ? 'border-pink-800' : 'border-white'"
          />
          <p v-if="emailError" class="font-bold text-pink-800 text-sm mt-1">Please enter a valid email address.</p>
        </div>
        <div class="mb-10">
          <label for="password" class="font-bold block mb-2">Password:</label>
          <input
            v-model="password"
            id="password"
            type="password"
            class="w-full p-2 bg-transparent border-2 rounded-md outline-none transition-colors"
            :class="passwordError ? 'border-pink-800' : 'border-white'"
          />
          <p v-if="passwordError" class="font-bold text-pink-800 text-sm mt-1">Password cannot be empty.</p>
        </div>
        <div>
          <button type="submit" class="block mt-10 w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
            Login
          </button>
        </div>
        
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const emailError = ref(false)
const passwordError = ref(false)

const { login } = useAuth()
const router = useRouter()

const handleLogin = async () => {
  // Reset errors
  emailError.value = false
  passwordError.value = false

  // Validation
  if (!email.value || !isValidEmail(email.value)) {
    emailError.value = true
  }
  if (!password.value) {
    passwordError.value = true
  }

  if (!emailError.value && !passwordError.value) {
    try {
      await login(email.value, password.value)
      router.push('/dashboard')
    } catch (error) {
      alert(error.message)
    }
  }
}

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}
</script>
