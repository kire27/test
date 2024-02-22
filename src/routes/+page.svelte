<script>
	console.log("evi from test2");

	let randomNum = 1;

	const dataObj = {
		'title': `title num ${randomNum}`,
		'content': `content is ${randomNum}`
	}

	const randomize = () => {
		
		randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
		console.log(randomNum);

	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- <button on:click={randomize}> randomize </button>

<a href={`about/${randomNum}`}>About my site {randomNum}</a> -->


<style>
	h1 {
		color: blue;
		font-size: 20px;
	}
</style>