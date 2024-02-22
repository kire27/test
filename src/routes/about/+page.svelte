<script>
	export let data;

</script>

<h1>blog</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/about/{slug}">{title}</a></li>
	{/each}
</ul>