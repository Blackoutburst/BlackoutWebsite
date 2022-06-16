<script>
    import Title from "./components/Title.svelte"
    import Bio from "./components/Bio.svelte"
    import Image from "./components/Image.svelte"
    import SubTitle from "./components/SubTitle.svelte"
    import Card from "./components/Card.svelte"
    import LinkIcon from "./components/LinkIcon.svelte"
    import Footer from "./components/Footer.svelte"

    import Swal from 'sweetalert2'
    function clipboard() {
        navigator.clipboard.writeText("Blackoutburst#7021");
        Swal.fire({title: 'Blackoutburst#7021',
        text: 'Was copied inside the clipboard!',
        background: '#202020',
        color: '#a855f7',
        confirmButtonColor: '#7a51b5'});
    }
</script>

<header>
    <div class="flex justify-center items-center p-6 bg-gradient-to-r from-[#2d0047] to-[#400047] shadow-lg">
        <img class="w-1/5 rounded-full shadow" src="img/pfp.jpg" alt="myLogo">
    </div>
</header>

<Title label='Welcome'/>

<Bio text="Hi, I'm Blackoutburst, and I'm a Java programmer!
I mainly work on Minecraft and video game project.
"/>

<div class="flex flex-wrap gap-10 flex-rows justify-center items-center w-11/12 m-auto mt-10">
    <Card link="./aow.html" imagePath="img/aow.jpg"
        title="Age of War"
        description="Age of War is a Spigot plugin,
        this plugin is based on the old flash game Age of War.
        In this game 2 players fight each other with one goal, destroying the opponent base.
    "/>
    <Card link="./hitw.html" imagePath="img/hitw.jpg"
        title="Hole in the Wall"
        description="Hole in the Wall is a Spigot plugin, based on the Hypixel game Hole in the wall,
        this plugin was made for training and community tournament purpose..
    "/>
    <Card link="./quake.html" imagePath="img/quake.jpg"
        title="QuakeCraft"
        description="QuakeCraft is a Spigot plugin, based on the Hypixel QuakeCraft,
        this plugin was made for testing community maps and features.
    "/>
    <Card link="./wally.html" imagePath="img/wally.jpg"
        title="Wally"
        description="Wally is discord bot for Hypixel Hole in the Wall.
        He can check user stats and track them in real time.
        He is also linked to my own Hole in the Wall plugin.
    "/>
    <Card link="./pong.html" imagePath="img/pong.jpg"
        title="Pong"
        description="This is a visual experiment between two bots
        playing a game of pong following the rhythm of a song.
    "/>
    <Card link="./pixel.html" imagePath="img/ps.jpg"
        title="Pixel Starship"
        description="Pixel Starship is a Android game,
        in this game your goal is to go as far as possible.
        This is also my first game ever published on the Play Store!
    "/>
    <Card link="./bme.html" imagePath="img/bme.jpg"
        title="B.M.E"
        description="B.M.E is a basic map editor, this editor focus on 2D maps.
        It was made for personal uses and handle the basic tools necessary to create simple maps.
    "/>
</div>

<SubTitle label='Social links'/>

<div class="flex flex-wrap gap-5 flex-rows justify-center items-center w-3/4 m-auto">
    <a href="javacript:void(0)" on:click={clipboard}>
        <img class="hover:scale-110 duration-200 w-32 sm:w-32 md:w-40 lg:w-40 xl:w-40 2xl:w-40" src="img/discord.png" alt="discord">
    </a>
    <LinkIcon link="https://www.patreon.com/Blackoutburst" imagePath="img/patreon.png" />
    <LinkIcon link="https://github.com/Blackoutburst" imagePath="img/github.png" />
    <LinkIcon link="https://www.youtube.com/channel/UCOmdNokN6UVeNhDfB61B_0A" imagePath="img/youtube.png" />
    <LinkIcon link="https://steamcommunity.com/id/blackoutburst/" imagePath="img/steam.png" />
</div>

<Footer/>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
