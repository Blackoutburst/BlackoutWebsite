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

<Title label='B.M.E'/>

<Bio text="B.M.E is a basic map editor, this editor focus on 2D maps.
It was made for personal uses and handle the basic tools necessary to create simple maps.
"/>

<SubTitle label='Screenshot'/>

<Image imagePath='img/bme1.jpg'/>
<Image imagePath='img/bme2.jpg'/>
<Image imagePath='img/bme3.jpg'/>
<Image imagePath='img/bme4.jpg'/>

<SubTitle label='Project link'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://github.com/Blackoutburst/Black-Map-Editor" imagePath="img/github.png" />
</div>

<SubTitle label='Made with'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://www.java.com/" imagePath="img/java.png" />
    <LinkIcon link="https://www.lwjgl.org/" imagePath="img/lwjgl.png" />
</div>

<Footer/>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
