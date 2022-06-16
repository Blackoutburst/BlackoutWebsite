<script>
    export let label = ''
</script>

<main>
    <div class="flex h-24 justify-center items-center m-10 font-bold text-5xl text-transparent sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl text-center bg-clip-text  bg-gradient-to-r from-violet-500 to-fuchsia-500">
        {label}
    </div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
