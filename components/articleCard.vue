<template>
	<li class="post">
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
	</li>
</template>

<script setup>
	defineProps(["post"]);
</script>
