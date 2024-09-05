<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="handleRegister">
        <div>
          <label for="name">Name:</label>
          <input v-model="name" id="name" type="text" class="bg-transparent"/>
        </div>
        <div>
          <label for="email">Email:</label>
          <input v-model="email" id="email" type="email" class="bg-transparent"/>
        </div>
        <div>
          <label for="password">Password:</label>
          <input v-model="password" id="password" type="password" class="bg-transparent"/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAuth } from '../composables/useAuth'
  import { useRouter } from 'vue-router'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  
  const { register } = useAuth()
  const router = useRouter()
  
  const handleRegister = async () => {
    try {
      await register(name.value, email.value, password.value)
      router.push('/dashboard')
    } catch (error) {
      alert(error.message)
    }
  }
  </script>
  