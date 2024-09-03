<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 class="text-4xl font-bold mb-6">Welcome to My App</h1>
      <p class="mb-4">Please log in or register to continue.</p>
      <div>
        <router-link to="/login" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-4">
          Login
        </router-link>
        <router-link to="/register" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
          Register
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  