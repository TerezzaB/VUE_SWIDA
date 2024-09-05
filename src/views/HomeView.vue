<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-4xl font-bold mb-10">Welcome to My App</h1>
    <p class="mb-4">Please Log in, if you have an account or Sign Up to continue.</p>
    <div>
      <router-link to="/login" class="block mt-20 mb-5 px-4 py-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-xl mr-4 hover:opacity-90">
        <span>LOGIN</span>
      </router-link>
    </div>
    <router-link to="/register" class="block px-4 py-2">
      <span class="mr-1">Don't have an account? </span>
      <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 relative after:content-[''] after:block after:h-[2px] after:w-full after:bg-gradient-to-r after:from-violet-500 after:to-fuchsia-500 after:absolute after:left-0 after:bottom-0 hover:scale-105 transition-transform duration-200 ease-in-out">
        Sign Up
      </span>
    </router-link>
  </div>
</template>

<script setup>
</script>
