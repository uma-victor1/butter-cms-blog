<template>
	<main class="min-h-screen">
		<Head>
			<Title> Blog posts</Title>
			<Meta name="description" content="View all my blog posts" />
		</Head>

		<header class="page-header flex items-center justify-center h-56 bg-gray-900 text-gray-50 text-center">
			<div class="wrapper max-w-5xl m-auto">
				<h1 class="font-black text-5xl">Posts</h1>
				<p>View all posts</p>
			</div>
		</header>
		<section class="p-4">
			<div class="wrapper max-w-5xl m-auto">
				<!-- <form action="" class="filter-form relative p-4">
					<div class="wrapper">
						<div class="form-control">
							<select name="category" id="category" class="bg-gray-50 p-4 shadow">
								<option value="all" @click="() => (activeCategory = `all`)">All Categories</option>
								<option
									v-for="category in categories"
									:key="category.slug"
									:value="category.slug"
									@click="() => (activeCategory = category.slug)"
								>
									{{ category.name }}
								</option>
							</select>
						</div>
					</div>
				</form> -->
				<categories-drop-down :categories="categories" />
				<ul class="posts flex flex-col gap-4">
					<!-- <li v-for="post in filteredPosts" :key="post.id" class="post">
						<nuxt-link :to="`/blog/${post.slug}`" class="flex flex-col md:flex-row gap-4 w-full bg-white p-4">
							<div class="img-cont w-full md:w-40 h-32">
								<img class="object-cover w-full h-full" :src="post.featured_image" :alt="post.featured_image_alt" />
							</div>
							<div class="wrapper flex flex-col justify-between gap-4">
								<header>
									<h1 class="font-bold text-2xl">{{ post.title }}</h1>
									<p>{{ post.summary }}</p>
								</header>
								<ul class="categories flex gap-2">
									<li v-for="category in post.categories" class="category bg-gray-100 text-gray-800 p-1 px-2">
										{{ category.name }}
									</li>
								</ul>
								<footer>
									<hr class="my-4" />
									<ul class="flex gap-4 text-gray-600">
										<li class="author">{{ `${post.author.first_name} ${post.author.last_name}` }}</li>
										<li class="published">{{ new Date(post.published).toDateString() }}</li>
									</ul>
								</footer>
							</div>
						</nuxt-link>
					</li> -->
					<article-card v-for="post in filteredPosts" :key="post.id" :post="post" />
				</ul>
			</div>
		</section>
	</main>
</template>

<style scoped></style>

<!-- <script>
	import { defineComponent } from "vue";
	import { useNuxtApp } from "#app";

	export default defineComponent({
		setup() {
			const { $butter } = useNuxtApp();
			const posts = ref([]);
			// const posts = await $butter.page
			// 	.list({
			// 		page: 1,
			// 		page_size: 10,
			// 	})
			// 	.then((res) => res.data.data)
			// 	.catch((err) => console.log("ERR ==>", err.response));

			const getPosts = async () => {
				try {
					let data = await $butter.page.list({
						page: 1,
						page_size: 10,
					});

					return data;
				} catch (err) {
					console.log("ERR ==>", err.response);
					return [];
				}
			};

			onMounted(async () => {
				posts.value = await getPosts();
				console.log(data);
			});

			return {
				posts,
			};
		},
	});
	// })

	// const { $butter } = useNuxtApp();

	// const { data: posts } = await useAsyncData("posts", async () => {
	// 	try {
	// 		let data = await $butter.post
	// 			.list({
	// 				page: 1,
	// 				page_size: 10,
	// 			})
	// 			.then((res) => res.data.data)
	// 			.catch((err) => console.log("ERR ==>", err.response));
	// 		return data;
	// 	} catch (error) {
	// 		console.log("ERR ==>", error);

	// 		return [];
	// 	}
	// });
</script> -->

<script setup>
	import ArticleCard from "~~/components/articleCard.vue";
	import CategoriesDropDown from "~~/components/categoriesDropDown.vue";
	const { $butter } = useNuxtApp();
	const posts = ref([]);
	const categories = ref([]);
	const activeCategory = ref("");

	const filteredPosts = computed(() => {
		if (activeCategory.value && activeCategory.value !== "all") {
			let filteredPosts = posts.value.filter((post) => {
				return post.categories.some((cat) => cat.slug === activeCategory.value);
			});
			console.log(filteredPosts);
			return filteredPosts;
		} else {
			return posts.value;
		}
	});

	console.log(activeCategory.value);
	console.log(filteredPosts.value);

	posts.value = await $butter.post
		.list({
			page: 1,
			page_size: 10,
		})
		.then((res) => res.data.data)
		.catch((err) => {
			console.log("ERR ==>", err.response);
			return [];
		});

	categories.value = await $butter.category
		.list()
		.then((res) => {
			return res.data.data;
		})
		.catch((err) => {
			console.log("ERR ==>", err.response);
			return [];
		});

	definePageMeta({
		title: "Some Page",
	});
</script>
