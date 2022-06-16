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

<Title label='Age of War'/>

<Bio text="Age of War is a Spigot plugin,
this plugin is based on the old flash game Age of War.
In this game 2 players fight each other with one goal,
destroying the opponent base.

This project features: 18 units, 6 ages, 6 bases and 6 special attacks
"/>

<SubTitle label='Video'/>

<iframe class="flex w-3/4 aspect-video  justify-center items-center m-auto mb-10 rounded-lg shadow-xl" src="https://www.youtube.com/embed/Fy0pyhpQIkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>

<SubTitle label='Screenshot'/>

<Image imagePath='img/aow1.jpg'/>
<Image imagePath='img/aow2.jpg'/>
<Image imagePath='img/aow3.jpg'/>
<Image imagePath='img/aow4.jpg'/>

<SubTitle label='Project link'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://github.com/Blackoutburst/AoW-plugin" imagePath="img/github.png" />
</div>

<SubTitle label='Made with'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://www.java.com/" imagePath="img/java.png" />
    <LinkIcon link="https://www.spigotmc.org/" imagePath="img/spigot.png" />
</div>

<Footer/>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
