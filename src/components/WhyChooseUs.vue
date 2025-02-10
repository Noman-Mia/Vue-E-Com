<template>
    <section class="bg-gray-100 py-14">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-gray-800">Why Choose Us?</h2>
        <p class="text-gray-600 text-center mt-2">We provide the best services with top-notch quality.</p>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div v-for="reason in reasons" :key="reason.id" class="bg-white shadow-lg rounded-lg p-6 text-center">
            <div class="text-blue-500 text-5xl mb-4">
              <i :class="reason.icon"></i>
            </div>
            <h3 class="text-xl font-semibold">{{ reason.title }}</h3>
            <p class="text-gray-600 mt-2">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const reasons = ref([
    { id: 1, title: "High Quality", description: "We ensure the best quality in every product and service.", icon: "fas fa-star" },
    { id: 2, title: "Affordable Prices", description: "Get the best value for your money with our pricing.", icon: "fas fa-dollar-sign" },
    { id: 3, title: "24/7 Support", description: "Our team is available anytime to assist you.", icon: "fas fa-headset" },
    { id: 4, title: "Fast Delivery", description: "We ensure quick and safe delivery of products.", icon: "fas fa-truck" },
    { id: 5, title: "Customer Satisfaction", description: "Your happiness is our top priority.", icon: "fas fa-smile" },
    { id: 6, title: "Trusted by Thousands", description: "A large customer base trusts our services.", icon: "fas fa-users" },
  ]);
  </script>
  
  <style scoped>
  /* Add any custom styles if necessary */
  </style>
  