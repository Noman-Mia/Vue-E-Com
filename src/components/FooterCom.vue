<template>
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <!-- Company Info -->
          <div>
            <h2 class="text-2xl font-bold">E-com</h2>
            <p class="text-gray-400 mt-2">Building the future, one innovation at a time.</p>
            <p class="text-gray-400 mt-2">Email: support@mycompany.com</p>
            <p class="text-gray-400">Phone: +123 456 7890</p>
          </div>
  
          <!-- Quick Links -->
          <div>
            <h3 class="text-xl font-semibold">Quick Links</h3>
            <ul class="mt-3 space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-blue-400">Home</a></li>
              <li><a href="#" class="text-gray-400 hover:text-blue-400">About Us</a></li>
              <li><a href="#" class="text-gray-400 hover:text-blue-400">Services</a></li>
              <li><a href="#" class="text-gray-400 hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
  
          <!-- Social Media -->
          <div>
            <h3 class="text-xl font-semibold">Follow Us</h3>
            <div class="flex space-x-4 mt-3">
              <a href="#" class="text-gray-400 hover:text-blue-400">
                <i class="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-blue-400">
                <i class="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-blue-400">
                <i class="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" class="text-gray-400 hover:text-blue-400">
                <i class="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
  
          <!-- Newsletter -->
          <div>
            <h3 class="text-xl font-semibold">Newsletter</h3>
            <p class="text-gray-400 mt-2">Subscribe for updates.</p>
            <div class="mt-4 flex">
              <input type="email" placeholder="Enter your email"
                class="px-4 py-2 w-full text-gray-900 rounded-l-md focus:outline-none">
              <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md text-white">
                Subscribe
              </button>
            </div>
          </div>
  
        </div>
        <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
          &copy; {{ new Date().getFullYear() }} E-com. All rights reserved.
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // No additional logic needed
  </script>
  
  <style scoped>
  /* Add any custom styling if necessary */
  </style>
  