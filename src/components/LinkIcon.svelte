<script>
    export let imagePath = ''
    export let link = ''
</script>

<main>
    <a href={link} target="_blank" rel="noopener noreferrer">
        <img class="hover:scale-110 duration-200 w-32 sm:w-32 md:w-40 lg:w-40 xl:w-40 2xl:w-40" src={imagePath} alt="iconLink">
    </a>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
