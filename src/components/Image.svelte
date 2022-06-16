<script>
    export let imagePath = ''
</script>

<main>
    <div class="flex w-3/4  justify-center items-center m-auto mb-10">
        <img class="object-cover rounded-lg shadow-xl" src={imagePath} alt="project screenshot">
    </div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
