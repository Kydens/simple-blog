<template>
  <div class="w-full max-w-3xl mx-auto py-8">
    <div class="text-xl font-semibold">Home Page</div>
    <div class="relative flex justify-end mb-7">
      <NuxtLink
        to="/blog"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        Go To Blog Page
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "Home Page",
});
</script>
