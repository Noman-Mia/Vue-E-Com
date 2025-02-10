<template>
    <section class="bg-gray-100 py-12">
      <div class="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h2 class="text-3xl font-bold text-center text-gray-800">📩 Contact Us</h2>
        <p class="text-center text-gray-600 mt-2">We would love to hear from you!</p>
  
        <form @submit.prevent="submitForm" class="mt-6 space-y-4">
          <!-- Name Field -->
          <div>
            <label class="block text-gray-700 font-medium">Your Name</label>
            <input v-model="name" type="text" placeholder="Enter your name"
              class="w-full p-3 border rounded-md focus:ring focus:ring-blue-300" />
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
          </div>
  
          <!-- Email Field -->
          <div>
            <label class="block text-gray-700 font-medium">Email Address</label>
            <input v-model="email" type="email" placeholder="Enter your email"
              class="w-full p-3 border rounded-md focus:ring focus:ring-blue-300" />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>
  
          <!-- Message Field -->
          <div>
            <label class="block text-gray-700 font-medium">Your Message</label>
            <textarea v-model="message" rows="4" placeholder="Write your message"
              class="w-full p-3 border rounded-md focus:ring focus:ring-blue-300"></textarea>
            <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
          </div>
  
          <!-- Submit Button -->
          <button type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
  
        <p v-if="successMessage" class="text-green-600 text-center mt-4 font-semibold">
          {{ successMessage }}
        </p>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const errors = ref({});
  const successMessage = ref('');
  
  const validateForm = () => {
    errors.value = {};
  
    if (!name.value) errors.value.name = 'Name is required';
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) errors.value.email = 'Valid email is required';
    if (!message.value) errors.value.message = 'Message cannot be empty';
  
    return Object.keys(errors.value).length === 0;
  };
  
  const submitForm = () => {
    if (validateForm()) {
      successMessage.value = 'Your message has been sent successfully! 🎉';
      // Clear form
      name.value = '';
      email.value = '';
      message.value = '';
      setTimeout(() => successMessage.value = '', 3000); // Remove success message after 3 seconds
    }
  };
  </script>
  