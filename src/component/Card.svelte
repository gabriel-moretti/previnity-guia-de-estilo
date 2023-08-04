<script lang="ts">
	export let categoria: string;
	export let descricao: string;
	export let codigo: string;
	export let imgSrc: string;

	const copy = (text:string) => {
		navigator.clipboard.writeText(text);
	};

</script>


<button class="w-full sm:w-1/3 lg:w-1/4" on:click={() => copy(codigo)}>
	<div class="card w-full min-h-full glass ">
		<figure class="bg-blue-700 h-48">
			<img class="p-10 w-full h-full" src={imgSrc} alt={codigo} />
		</figure>
		<div class="card-body items-center text-center">
			<h2 class="card-title">{categoria}</h2>
			<kbd class="kbd w-fit">{codigo}</kbd>
			<p>{descricao}</p>
		</div>
	</div>
</button>

<style>
	/* your styles go here */
</style>
