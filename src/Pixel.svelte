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

<Title label='Pixel Starship'/>

<Bio text="Pixel Starship is a Android game,
in this game your goal is to go as far as possible.
This is also my first game ever published on the Play Store!
"/>

<SubTitle label='Screenshot'/>

<Image imagePath='img/pixel1.jpg'/>
<Image imagePath='img/pixel2.jpg'/>
<Image imagePath='img/pixel3.jpg'/>
<Image imagePath='img/pixel4.jpg'/>

<SubTitle label='Project link'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://play.google.com/store/apps/details?id=com.blackoutburst.pixelstarship" imagePath="img/play-store.png" />
</div>

<SubTitle label='Made with'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <LinkIcon link="https://www.java.com/" imagePath="img/java.png" />
    <LinkIcon link="https://www.android.com/" imagePath="img/android.png" />
</div>

<Footer/>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
