<template>
    <div class="">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email:</label>
          <input v-model="email" id="email" type="email" class="bg-transparent" />
        </div>
        <div>
          <label for="password">Password:</label>
          <input v-model="password" id="password" type="password" class="bg-transparent" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAuth } from '../composables/useAuth'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  
  const { login } = useAuth()
  const router = useRouter()
  
  const handleLogin = async () => {
    try {
      await login(email.value, password.value)
      router.push('/dashboard')
    } catch (error) {
      alert(error.message)
    }
  }
  </script>
  