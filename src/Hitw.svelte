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

<Title label='Hole in the Wall'/>

<Bio text="Hole in the Wall is a Spigot plugin, based on the Hypixel game Hole in the wall.
It was made for training and community tournament purpose.

This project features: a configuration menu, normal and custom wall, custom game mode
duel system, score saving accessible via an API and much more."
/>

<SubTitle label='Video'/>

<iframe class="flex w-3/4 aspect-video  justify-center items-center m-auto mb-10 rounded-lg shadow-xl" src="https://www.youtube.com/embed/yPd0cWm1Kbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
<iframe class="flex w-3/4 aspect-video  justify-center items-center m-auto mb-10 rounded-lg shadow-xl" src="https://www.youtube.com/embed/J37SzCiMifc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>

<SubTitle label='Screenshot'/>

<Image imagePath='img/hitw1.jpg'/>
<Image imagePath='img/hitw2.jpg'/>
<Image imagePath='img/hitw3.jpg'/>
<Image imagePath='img/hitw4.jpg'/>

<SubTitle label='Project link'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://github.com/Blackoutburst/HitW-plugin" imagePath="img/github.png" />
</div>

<SubTitle label='Made with'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://www.java.com/" imagePath="img/java.png" />
    <LinkIcon link="https://www.spigotmc.org/" imagePath="img/spigot.png" />
</div>

<SubTitle label='Test here'/>

<iframe class="flex justify-center items-center w-2/3 m-auto" title="server" src="https://fr.namemc.com/server/hitw.minesr.com/embed"/>

<Footer/>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
