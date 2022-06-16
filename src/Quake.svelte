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
<Title label='QuakeCraft'/>

<Bio text="QuakeCraft is a Spigot plugin, based on the Hypixel QuakeCraft,
this plugin was made for testing community maps and features.

This project features: the full QuakeCraft game, cosmetic menu (6 menus, 78 items),
a map selector, 70+ maps, 19 game settings, spawn point management system"
/>

<SubTitle label='Video'/>

<iframe class="flex w-3/4 aspect-video  justify-center items-center m-auto mb-10" src="https://www.youtube.com/embed/oK-eeDDhNRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe class="flex w-3/4 aspect-video  justify-center items-center m-auto mb-10" src="https://www.youtube.com/embed/rEMI-Klku4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<SubTitle label='Screenshot'/>

<Image imagePath='img/quake1.jpg'/>
<Image imagePath='img/quake2.jpg'/>
<Image imagePath='img/quake3.jpg'/>
<Image imagePath='img/quake4.jpg'/>

<SubTitle label='Project link'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://github.com/Blackoutburst/QuakeCraft" imagePath="img/github.png" />
</div>

<SubTitle label='Made with'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://www.java.com/" imagePath="img/java.png" />
    <LinkIcon link="https://www.spigotmc.org/" imagePath="img/spigot.png" />
</div>

<SubTitle label='Test here'/>

<iframe class="flex justify-center items-center w-2/3 m-auto" src="https://fr.namemc.com/server/173.208.97.173:35609/embed"/>

<Footer/>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
