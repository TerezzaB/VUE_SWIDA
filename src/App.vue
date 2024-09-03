<template>
  <div id="app" class="min-h-screen bg-gray-100">
    <nav class="p-4 bg-blue-600 text-white">
      <div class="container mx-auto flex justify-between">
        <h1 class="text-lg font-bold">My Vue App</h1>
        <div>
          <router-link to="/login" class="px-4">Login</router-link>
          <router-link to="/register" class="px-4">Registration</router-link>
        </div>
      </div>
    </nav>

    <main class="container mx-auto p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
</script>

<style>

</style>
