<template>
    <section class="bg-gray-100 py-16">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-gray-800">Popular Sports</h2>
        <p class="text-gray-600 text-center mt-2">Explore the world of sports and stay active</p>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
          <div v-for="sport in sports" :key="sport.id" class="bg-white shadow-lg rounded-lg p-4">
            <img :src="sport.image" :alt="sport.name" class="w-full h-48 object-cover rounded-md">
            <h3 class="text-xl font-semibold mt-4">{{ sport.name }}</h3>
            <p class="text-gray-600 text-sm mt-2">{{ sport.description }}</p>
            <button class="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const sports = ref([
    { id: 1, name: "Football", description: "The world's most popular sport played globally.", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Basketball", description: "Fast-paced game with high-energy action.", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Tennis", description: "A sport that requires speed, skill, and strategy.", image: "https://via.placeholder.com/300" },
    { id: 4, name: "Cricket", description: "A widely played sport with bat and ball.", image: "https://via.placeholder.com/300" },
  ]);
  </script>
  