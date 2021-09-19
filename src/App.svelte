<header>
    <div class="header">
        <img src="img/pfp.png" class="logo">
        <p class="title">BLACKOUTBURST</p>
    </div>
</header>

<div class="bio">
    <h1 class="bio-title">Welcome !</h1>
    <p>
        Hi, I'm Blackoutburst and I'm mainly a Java programmer.<br>
        I started programming a while ago doing small Minecraft mods.<br>
        <br>
        Today I'm still working mainly on Minecraft projects that a enjoy.<br>
        I used to do games/software with LWJGL and Slick2D.<br>
        <br>
        I'm a student currently doing my 3rd year inside a computer science university.<br>
        Currently working on spigot/bukkit plugins with the goal of working at Hypixel.<br>
        <br>
        I go by He/Him, people usually call me Blackout so feel free to do as well!<br>
        You can find some of my projects below!

    </p>
</div>

<div class="pr">

    <a href="https://github.com/Blackoutburst/Wally" target="_blank" rel="noopener noreferrer">
        <img src="img/wally.png" class="project-img">
    </a>

    <a href="https://github.com/Blackoutburst/HitW-plugin" target="_blank" rel="noopener noreferrer">
        <img src="img/hitw.png" class="project-img">
    </a>

    <a href="https://github.com/Blackoutburst/QuakeCraft" target="_blank" rel="noopener noreferrer">
        <img src="img/quake.png" class="project-img">
    </a>

    <a href="https://github.com/Blackoutburst/AoW-plugin" target="_blank" rel="noopener noreferrer">
        <img src="img/aow.png" class="project-img">
    </a>

    <a href="https://github.com/Blackoutburst/Rhythm-Pong" target="_blank" rel="noopener noreferrer">
        <img src="img/pong.png" class="project-img">
    </a>

    <a href="https://play.google.com/store/apps/details?id=com.blackoutburst.pixelstarship" target="_blank" rel="noopener noreferrer">
        <img src="img/ps.png" class="project-img">
    </a>

    <p>(Most of my project are on Github, only a few are listed here so recommend you to check it below.)</p>

</div>


<div class="contact">
    <h1 class="contact-title">Useful stuff</h1>


    <a href="javacript:void(0)" on:click={test}>
        <img src="img/discord.png" class="contact-img">
    </a>

    <a href="https://github.com/Blackoutburst" target="_blank" rel="noopener noreferrer">
        <img src="img/github.png" class="contact-img">
    </a>

    <a href="https://www.youtube.com/channel/UCOmdNokN6UVeNhDfB61B_0A" target="_blank" rel="noopener noreferrer">
        <img src="img/youtube.png" class="contact-img">
    </a>
</div>

<div id="clipboard"></div>

<div class="footer">
    <p class="title">© Blackoutburst</p>
</div>

<script>

function test() {
    navigator.clipboard.writeText("Blackout#0900");
    alert("Discord copied inside the clipboard: Blackout#0900");
}
</script>

<style>


.contact-img {
    max-width: 8%;
    border-radius: 10%;
    padding: 10px;
    margin: 10px;
}


.contact {
    margin-top: 80px;
    padding: 10px;
    text-align: center;
    font-size: 26px;
    font-family: coda;
    color: white;
}

.contact-title {
    font-family: coda;
    font-weight: bold;
    background: -webkit-linear-gradient(#823ba1, #5d38a8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 40px;
    color: white;
}

.footer {
    margin-top: 80px;
    padding: 10px;
    background: rgb(22,8,40);
    background: linear-gradient(49deg, rgba(22,8,40,1) 0%, rgba(45,10,71,1) 38%, rgba(11,2,31,1) 100%);
    text-align: left;
    color: white;
    font-size: 20px;
    box-shadow: 0px 0px 10px 0px rgb(30,30,30);
}

.project-img {
    max-width: 75%;
    border-radius: 10%;
    padding: 3px;
    margin: 3px;
}

.pr {
    text-align:center;
    font-size: 26px;
    font-family: coda;
    font-style: italic;
    color: #aaaaaa;
}


.bio {
    padding: 80px;
    text-align: center;
    font-size: 26px;
    font-family: coda;
    color: white;
}

.bio-title {
    background: -webkit-linear-gradient(#823ba1, #5d38a8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: coda;
    font-weight: bold;
    font-size: 40px;
    color: white;
}

.title {
    font-family: coda;
    background: -webkit-linear-gradient(#823ba1, #5d38a8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.header {
    padding: 40px;
    background: rgb(22,8,40);
    background: linear-gradient(49deg, rgba(22,8,40,1) 0%, rgba(45,10,71,1) 38%, rgba(11,2,31,1) 100%);
    text-align: center;
    color: white;
    font-size: 40px;
    box-shadow: 0px 0px 10px 0px rgb(30,30,30);
}

.logo {
    box-shadow: 0px 0px 10px 0px #7231cc;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 15vmax;
    border-radius: 50%;
}
</style>
