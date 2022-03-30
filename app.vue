<template>
	<div>
		<Head>
			<Title> My CMS powered blog </Title>
			<Meta name="description" content="Welcme to my CMS powered blog! Enjoy!" />
		</Head>

		<header class="sticky top-0 p-4 bg-white">
			<div class="wrapper flex items-center justify-between w-full max-w-5xl m-auto">
				<figure>
					<NuxtLink to="/">
						<h1>Home</h1>
					</NuxtLink>
				</figure>

				<nav>
					<ul class="flex gap-4">
						<li>
							<NuxtLink to="/blog">Blog</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/blog/category">Categories</NuxtLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		<NuxtPage />
	</div>
</template>

<script setup>
	const route = useRoute();
	const siteMeta = ref({
		title: route.meta.title || "My CMS powered blog",
		description: "",
		image: "",
		url: "",
	});

	// useMeta({
	// 	title: computed(() => siteMeta.value.title),
	// });
</script>
