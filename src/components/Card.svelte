<script>
    export let link = ''
    export let imagePath = ''
    export let title = ''
    export let description = ''
</script>

<a href={link}>
    <main class="w-96 h-[30rem] lg:w-[30rem] lg:h-[36rem] xl:w-[36rem] xl:h-[40rem] 2xl:w-[42rem] 2xl:h-[44rem] rounded-xl shadow-lg bg-[#1b1b1b] hover:scale-105 hover:shadow-xl duration-200">
        <img class="w-full rounded-t-xl" src={imagePath} alt="project icon">
        <div class="flex mx-5 mt-5 h-14 sm:h-14 md:h-14 lg:h-16 xl:h-20 2xl:h-20 font-bold text-3xl text-transparent sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl bg-clip-text  bg-gradient-to-r from-violet-500 to-fuchsia-500">
            {title}
        </div>
        <div class="flex mx-5 mb-5 text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-purple-500">
            {description}
        </div>
    </main>
</a>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
