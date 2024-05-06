<template>
  <div class="w-full max-w-3xl mx-auto py-8">
    <div class="text-xl font-semibold">Blog Page</div>
    <div class="relative flex justify-end mb-7">
      <NuxtLink
        to="/blog/create"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        Add Post
      </NuxtLink>
    </div>

    <div
      v-for="blog in data"
      :key="blog.id"
      class="relative w-full border rounded-lg mb-5 p-5"
    >
      <div class="text-lg font-semibold mb-3">{{ blog.title }}</div>
      <p>{{ blog.content }}</p>

      <div class="flex justify-end pt-3">
        <NuxtLink
          @click="onDelete(blog.id)"
          type="button"
          class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
        >
          Delete
        </NuxtLink>
        <NuxtLink
          :to="`/blog/${blog.id}`"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
        >
          Edit
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogModel } from "~~/server/models/blog";

useHead({
  title: "Blog Page",
});

const data = ref<BlogModel[]>([]);

const fetchData = async () => {
  try {
    const result = (await $fetch("/api/blog")) as any;
    data.value = result.data as BlogModel[];
  } catch (error) {
    alert("Fetch was error");
  }
};

onMounted(() => {
  fetchData();
});

const onDelete = async (id: number) => {
  try {
    await $fetch("/api/blog/" + id, {
      method: "DELETE",
    });
    await fetchData();
  } catch (error) {
    alert("Delete error");
  }
};
</script>
