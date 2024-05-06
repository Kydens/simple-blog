<template>
  <div class="w-full max-w-3xl mx-auto py-8">
    <div class="text-xl font-semibold mb-7">Add Blog</div>

    <div class="mb-6">
      <label for="title" class="block mb-2 text-sm font-medium text-gray-900"
        >Title</label
      >
      <input
        v-model="form.title"
        type="title"
        id="title"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Write your title here..."
        required
      />
    </div>

    <div class="mb-6">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900">
        Content
      </label>
      <textarea
        v-model="form.content"
        id="content"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Write your contents here..."
      ></textarea>
    </div>

    <div class="relative flex justify-end mb-7">
      <NuxtLink
        to="/blog"
        type="button"
        class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        Back
      </NuxtLink>
      <button
        @click="onSubmit"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

useHead({
  title: "Add Blog",
});

const form = reactive({
  title: "",
  content: "",
});

const onSubmit = async () => {
  try {
    await $fetch("/api/blog", {
      method: "POST",
      body: form,
    });

    router.push("/blog");
  } catch {
    alert("Post Blog Error");
  }
};
</script>
