<template>
    <footer class="bg-gray-800 text-white py-6">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-sm">&copy; {{ new Date().getFullYear() }} MyWebsite. All rights reserved.</p>
          <div class="flex space-x-4 mt-2 md:mt-0">
            <a href="#" class="hover:text-gray-400">Privacy Policy</a>
            <a href="#" class="hover:text-gray-400">Terms of Service</a>
            <a href="#" class="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // No need for JavaScript logic in this simple footer
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  