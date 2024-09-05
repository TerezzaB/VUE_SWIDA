<template>
  <div id="app" class="min-h-screen text-white">
    <nav class="p-4 border-b-2 border-violet-500">
      <div class="container mx-auto flex justify-between">
        <h1 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">My Vue App</h1>
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
