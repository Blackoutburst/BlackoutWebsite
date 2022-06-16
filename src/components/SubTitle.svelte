<script>
    export let label = ''
</script>

<main>
    <div class="flex h-24 justify-center items-center m-6 font-bold text-3xl text-transparent sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-center bg-clip-text  bg-gradient-to-r from-violet-500 to-fuchsia-500">
        {label}
    </div>
</main>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
