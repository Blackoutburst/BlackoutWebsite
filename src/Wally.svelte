<script>
	import Header from "./components/Header.svelte"
    import Title from "./components/Title.svelte"
    import Bio from "./components/Bio.svelte"
    import Image from "./components/Image.svelte"
    import SubTitle from "./components/SubTitle.svelte"
    import LinkIcon from "./components/LinkIcon.svelte"
    import Footer from "./components/Footer.svelte"
</script>

<Header/>

<Title label='Wally'/>

<Bio text="Wally is discord bot for Hypixel Hole in the Wall.
He can check user stats and track them in real time.
He is also linked to my own Hole in the Wall plugin."/>

<SubTitle label='Screenshot'/>

<Image imagePath='img/wally1.png'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-11/12 m-auto">
    <img class="w-96 lg:w-5/12 xl:w-5/12 2xl:w-5/12" src="img/wally2.png" alt="project screenshot">
    <img class="w-96 lg:w-5/12 xl:w-5/12 2xl:w-5/12" src="img/wally3.png" alt="project screenshot">
    <img class="w-96 lg:w-5/12 xl:w-5/12 2xl:w-5/12" src="img/wally4.png" alt="project screenshot">
    <img class="w-96 lg:w-5/12 xl:w-5/12 2xl:w-5/12"  src="img/wally5.png" alt="project screenshot">
</div>

<SubTitle label='Project link'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://discord.com/invite/Gh24vw5b54" imagePath="img/discord.png" />
    <LinkIcon link="https://github.com/Blackoutburst/Wally" imagePath="img/github.png" />
</div>

<SubTitle label='Made with'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://kotlinlang.org/" imagePath="img/kotlin.png" />
    <LinkIcon link="https://github.com/DV8FromTheWorld/JDA" imagePath="img/jda.png" />
</div>

<Footer/>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
