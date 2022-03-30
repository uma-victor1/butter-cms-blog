<template>
	<main class="min-h-screen">
		<header class="page-header flex items-center justify-center h-56 bg-gray-900 text-gray-50 text-center">
			<div class="wrapper max-w-5xl m-auto">
				<h1 class="font-black text-5xl">Categories</h1>
				<p>View all categories</p>
			</div>
		</header>
		<section class="p-4 py-12">
			<div class="wrapper max-w-5xl m-auto">
				<ul class="posts flex flex-row justify-center gap-8">
					<li
						v-for="category in categories"
						:key="category.slug"
						class="text-2xl p-4 bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-gray-100"
					>
						<NuxtLink :to="`/blog/category/${category.slug}`">{{ category.name }}</NuxtLink>
					</li>
				</ul>
			</div>
		</section>
	</main>
</template>

<script setup>
	const { $butter } = useNuxtApp();
	const categories = ref([]);

	categories.value = await $butter.category
		.list()
		.then((res) => {
			return res.data.data;
		})
		.catch((err) => {
			console.log("ERR ==>", err.response);
			return [];
		});
</script>
