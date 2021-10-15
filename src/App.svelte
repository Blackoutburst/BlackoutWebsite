<div class="navbar">
    <a href="index.html"><img src="img/pfp.jpg" alt="logo" class="nav-icon" style="border-radius: 50%"></a>
    <a href="wally.html"><img src="img/wally.png" alt="wally" class="nav-icon"></a>
    <a href="hitw.html"><img src="img/hitw.png" alt="hitw" class="nav-icon"></a>
    <a href="quake.html"><img src="img/quake.png" alt="quake" class="nav-icon"></a>
    <a href="aow.html"><img src="img/aow.png" alt="aow" class="nav-icon"></a>
    <a href="pong.html"><img src="img/pong.png" alt="pong" class="nav-icon"></a>
    <a href="pixel.html"><img src="img/pixel.png" alt="ps" class="nav-icon" style="border-radius: 20px"></a>
</div>

<header>
    <div class="header">
        <img src="img/pfp.jpg" alt="myLogo" class="logo">
        <p class="title">BLACKOUTBURST</p>
    </div>
</header>

<div class="bio">
    <h1 class="bio-title">Welcome !</h1>
    <p>
        Hi, I'm Blackoutburst and I'm mainly a Java programmer.<br>
        I started programming a while ago doing small Minecraft mods.<br>
        <br>
        Today I'm still working mainly on Minecraft projects that I enjoy.<br>
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

    <a href="wally.html">
        <img src="img/wally.jpg" alt="wally" class="project-img">
    </a>

    <a href="hitw.html">
        <img src="img/hitw.jpg" alt="hitw" class="project-img">
    </a>

    <a href="quake.html">
        <img src="img/quake.jpg" alt="quake" class="project-img">
    </a>

    <a href="https://github.com/Blackoutburst/AoW-plugin" target="_blank" rel="noopener noreferrer">
        <img src="img/aow.jpg" alt="aow" class="project-img">
    </a>

    <a href="pong.html">
        <img src="img/pong.jpg" alt="pong" class="project-img">
    </a>

    <a href="pixel.html">
        <img src="img/ps.jpg" alt="ps" class="project-img">
    </a>

    <p class="note">(Most of my projects are on Github, only a few are listed here so recommend you to check it below)</p>

</div>

<div class="contact">
    <h1 class="contact-title">How to find me</h1>


    <a href="javacript:void(0)" on:click={clipboard}>
        <img src="img/discord.png" alt="discord" class="contact-img">
    </a>

    <a href="https://github.com/Blackoutburst" target="_blank" rel="noopener noreferrer">
        <img src="img/github.png" alt="github" class="contact-img">
    </a>

    <a href="https://www.youtube.com/channel/UCOmdNokN6UVeNhDfB61B_0A" target="_blank" rel="noopener noreferrer">
        <img src="img/youtube.png" alt="youtube" class="contact-img">
    </a>

    <a href="https://fr.namemc.com/profile/b8ef1c76-15e0-4b95-8d47-4ca133561f5a" target="_blank" rel="noopener noreferrer">
        <img src="img/minecraft.png" alt="github" class="contact-img">
    </a>

    <a href="https://steamcommunity.com/id/blackoutburst/" target="_blank" rel="noopener noreferrer">
        <img src="img/steam.png" alt="github" class="contact-img">
    </a>
</div>

<div id="clipboard"></div>

<div class="footer">
    <p class="footer-title">© Blackoutburst</p>
</div>

<script>
function clipboard() {
    navigator.clipboard.writeText("Blackout#0900");
    alert("Discord copied inside the clipboard: Blackout#0900");
}
</script>

<style>
@font-face {
  font-family: customFontCoda;
  src: url("../font/coda.ttf");
}

@media only screen and (max-width: 1200px) {
    .contact-img {
        max-width: 15vw;
        padding: 10px;
        margin: 10px;
    }
}

@media only screen and (min-width: 1200px) {
    .contact-img {
        max-width: 7%;
        padding: 10px;
        margin: 10px;
    }
}

.contact {
    margin-top: 80px;
    padding: 10px;
    text-align: center;
    color: white;
}

@media only screen and (min-width: 1200px) {
    .contact-title {
        font-family: customFontCoda;
        font-weight: bold;
        background: #bf00ff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 40px;
        color: white;
    }
}

@media only screen and (max-width: 1200px) {
    .contact-title {
        font-family: customFontCoda;
        font-weight: bold;
        background: #bf00ff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 5vw;
        color: white;
    }
}

@media only screen and (min-width: 1200px) {
    .project-img {
        max-width: 40%;
        border-radius: 50px;
        padding: 3px;
        margin: 3px;
    }
}

@media only screen and (max-width: 1200px) {
    .project-img {
        max-width: 40%;
        border-radius: 20px;
        padding: 3px;
        margin: 3px;
    }
}

.pr {
    text-align:center;
}

@media only screen and (max-width: 1200px) {
    .note {
        text-align:center;
        font-size: 3vw;
        margin-left: 40px;
        margin-right: 40px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
        font-style: italic;
        color: #4f396e;
        padding-top: 20px;
    }
}

@media only screen and (min-width: 1200px) {
    .note {
        text-align:center;
        font-size: 26px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
        font-style: italic;
        color: #4f396e;
        padding-top: 20px;
    }
}

@media only screen and (max-width: 1200px) {
    .bio {
        text-align: center;
        font-size: 3vw;
        margin-left: 40px;
        margin-right: 40px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #d4b5ff;
        padding-bottom: 40px;
    }
}

@media only screen and (min-width: 1200px) {
    .bio {
        text-align: center;
        font-size: 26px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #d4b5ff;
        padding-bottom: 40px;
    }
}


@media only screen and (min-width: 1200px) {
    .bio-title {
        background: #bf00ff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: customFontCoda;
        font-weight: bold;
        font-size: 40px;
        color: white;
    }
}

@media only screen and (max-width: 1200px) {
    .bio-title {
        background: #bf00ff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: customFontCoda;
        font-weight: bold;
        font-size: 5vw;
        color: white;
    }
}

.logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 15vmax;
    border-radius: 50%;
    border-style: solid;
    border-color: #bf00ff;
    border-width: 2px;
}
</style>
