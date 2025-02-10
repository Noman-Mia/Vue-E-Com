<template>
    <section class="bg-gray-100 ">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800">Our Products</h2>
        <p class="text-gray-600 text-center mt-2">Explore our latest collection</p>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <div v-for="product in products" :key="product.id" class="bg-white shadow-lg rounded-lg p-4">
            <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover rounded-md">
            <h3 class="text-lg font-semibold mt-4">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm">{{ product.description }}</p>
            <div class="mt-3 flex justify-between items-center">
              <span class="text-blue-600 font-bold text-lg">${{ product.price }}</span>
              <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const products = ref([
    { id: 1, name: "Wireless Headphones", description: "High-quality sound and noise .", price: 99, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
    { id: 2, name: "Smart Watch", description: "Track your fitness and stay connected.", price: 149, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
    { id: 3, name: "Gaming Mouse", description: "Precision and speed for pro gaming.", price: 59, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
    { id: 4, name: "Mechanical Keyboard", description: "Tactile feedback and RGB lighting.", price: 129, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
    { id: 1, name: "Wireless Headphones", description: "High-quality sound and noise .", price: 99, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
    { id: 2, name: "Smart Watch", description: "Track your fitness and stay connected.", price: 149, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
    { id: 3, name: "Gaming Mouse", description: "Precision and speed for pro gaming.", price: 59, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
    { id: 4, name: "Mechanical Keyboard", description: "Tactile feedback and RGB lighting.", price: 129, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
    { id: 1, name: "Wireless Headphones", description: "High-quality sound and noise .", price: 99, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
    { id: 2, name: "Smart Watch", description: "Track your fitness and stay connected.", price: 149, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
    { id: 3, name: "Gaming Mouse", description: "Precision and speed for pro gaming.", price: 59, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
    { id: 4, name: "Mechanical Keyboard", description: "Tactile feedback and RGB lighting.", price: 129, image: "https://i.ibb.co.com/Qv2nRdcg/download.jpg" },
  ]);
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
  