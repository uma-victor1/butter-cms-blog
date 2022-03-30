<template>
	<main>
		<Head>
			<Title> {{ post.title }} </Title>
			<Meta name="description" :content="post.summary" />

			<Meta property="og:title" :content="post.title" />
			<Meta name="twitter:title" :content="post.title" />

			<Meta property="og:description" :content="post.summary" />
			<Meta name="twitter:description" :content="post.summary" />

			<Meta property="og:image" :content="post.featured_image" />
			<Meta property="twitter:image" :content="post.featured_image" />
		</Head>

		<article class="p-4">
			<div class="wrapper">
				<header class="mb-8">
					<div class="img-cont cover h-xs">
						<img class="object-cover w-full h-full" :src="post.featured_image" :alt="post.featured_image_alt" />
					</div>
					<div class="wrapper w-full my-4 max-w-5xl m-auto">
						<h1 class="font-bold text-2xl">{{ post.title }}</h1>
						<p>{{ post.summary }}</p>
						<hr class="my-4" />

						<ul class="flex gap-4 text-gray-600">
							<li class="author">{{ `${post.author.first_name} ${post.author.last_name}` }}</li>
							<li class="published">{{ new Date(post.published).toDateString() }}</li>
						</ul>
					</div>
				</header>
				<div class="wrapper w-full max-w-5xl m-auto">
					<div class="content">
						<div class="markdown">
							<div v-html="post.body"></div>
						</div>
					</div>
				</div>
			</div>
		</article>
	</main>
</template>

<script setup>
	// import Butter from "buttercms";
	// import Butter from "buttercms";
	const route = useRoute();
	const { $butter } = useNuxtApp();
	const slug = route.params.slug;
	console.log($butter);
	let post = await $butter.post
		.retrieve(slug)
		.then((res) => res.data.data)
		.catch((err) => console.log("ERR ==>", err.response));
</script>
