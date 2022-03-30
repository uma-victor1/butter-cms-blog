<template>
	<main class="min-h-screen">
		<header class="page-header flex items-center justify-center h-56 bg-gray-900 text-gray-50 text-center">
			<div class="wrapper max-w-5xl m-auto">
				<h1 class="font-black text-5xl">{{ postsByCategories.name }}</h1>
				<p>View all posts</p>
			</div>
		</header>
		<section class="p-4">
			<div class="wrapper max-w-5xl m-auto">
				<ul class="posts flex flex-col gap-4">
					<article-card v-for="post in postsByCategories.recent_posts" :key="post.id" :post="post" />
				</ul>
			</div>
		</section>
	</main>
</template>

<script setup>
	import ArticleCard from "~~/components/articleCard.vue";
	const route = useRoute();
	const { $butter } = useNuxtApp();
	const postsByCategories = ref([]);
	const slug = route.params.slug;

	postsByCategories.value = await $butter.category
		.retrieve(slug, {
			include: "recent_posts",
		})
		.then((res) => {
			return res.data.data;
		})
		.catch((err) => {
			console.log("ERR ==>", err.response);
			return [];
		});
</script>
