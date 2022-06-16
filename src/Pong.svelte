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

<Title label='Rhythm Pong'/>

<Bio text="This is a visual experiment between two bots
playing a game of pong following the rhythm of a song.
"/>

<SubTitle label='Video'/>

<iframe class="flex w-3/4 aspect-video  justify-center items-center m-auto mb-10 rounded-lg shadow-xl" src="https://www.youtube.com/embed/q3KTWuEAKY0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>

<SubTitle label='Screenshot'/>

<Image imagePath='img/pong1.jpg'/>

<SubTitle label='Project link'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://github.com/Blackoutburst/Rhythm-Pong" imagePath="img/github.png" />
</div>

<SubTitle label='Made with'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://docs.microsoft.com/en-us/dotnet/csharp/" imagePath="img/csharp.png" />
    <LinkIcon link="https://unity.com/" imagePath="img/unity.png" />
</div>

<Footer/>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
