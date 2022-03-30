<template>
	<div class="categories z-10">
		<div class="relative group w-42">
			<div class="flex items-center cursor-pointer border group-hover:border-grey-light py-1 px-2">
				<p>All categories</p>
				<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
				</svg>
			</div>
			<div class="items-center absolute border border-t-0 p-1 bg-white p-2 invisible group-hover:visible w-full">
				<nuxt-link
					v-for="category in categories"
					:key="category.slug"
					:to="`/blog/category/${category.slug}`"
					class="block hover:bg-gray-100 p-1 cursor-pointer"
				>
					{{ category.name }}
				</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script setup>
	defineProps(["categories"]);
</script>
