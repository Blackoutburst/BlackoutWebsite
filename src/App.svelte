<header>
    <div class="header">
        <img src="img/pfp.jpg" alt="myLogo" class="logo">
    </div>
</header>

<div class="title">Welcome !</div>

<div class="bio">
        Hi, I'm Blackoutburst, and I'm a Java programmer!<br>
        I mainly work on Minecraft and video game project.<br>
</div>

<div class="project">
    <div class="card">
        <a href="aow">
          <img src="img/aow.jpg" alt="project icon" style="width:100%" class="project-image">
            <h4>Age of War</h4>
            <p>
                Age of War is a Spigot plugin,
                this plugin is based on the old flash game Age of War.
                In this game 2 players fight each other with one goal, destroying the opponent base.
            </p>
    </a>
    </div>
    <div class="card">
        <a href="hitw">
          <img src="img/hitw.jpg" alt="project icon" style="width:100%" class="project-image">
            <h4>Hole in the Wall</h4>
            <p>
                Hole in the Wall is a Spigot plugin, based on the Hypixel game Hole in the wall,
                this plugin was made for training and community tournament purpose.
            </p>
        </a>
    </div>
    <div class="card">
        <a href="quake">
          <img src="img/quake.jpg" alt="project icon" style="width:100%" class="project-image">
            <h4>QuakeCraft</h4>
            <p>
                QuakeCraft is a Spigot plugin, based on the Hypixel QuakeCraft,
                this plugin was made for testing community maps and features.
            </p>
        </a>
    </div>
</div>

<div class="project">
    <div class="card">
        <a href="wally">
          <img src="img/wally.jpg" alt="project icon" style="width:100%" class="project-image">
            <h4>Wally</h4>
            <p>
                Wally is discord bot for Hypixel Hole in the Wall.<br>
                He can check user stats and track them in real time.<br>
                He is also linked to my own Hole in the Wall plugin.
            </p>
        </a>
    </div>
    <div class="card">
        <a href="pong">
          <img src="img/pong.jpg" alt="project icon" style="width:100%" class="project-image">
            <h4>Rhythm Pong</h4>
            <p>
                This is a visual experiment between two bots
                playing a game of pong following the rhythm of a song.
            </p>
        </a>
    </div>
    <div class="card">
        <a href="pixel">
          <img src="img/ps.jpg" alt="project icon" style="width:100%" class="project-image">
            <h4>Pixel Starship</h4>
            <p>
                Pixel Starship is a Android game,
                in this game your goal is to go as far as possible.
                This is also my first game ever published on the Play Store!
            </p>
        </a>
    </div>
</div>
<div class="project">
    <div class="card">
        <a href="bme">
          <img src="img/bme.jpg" alt="project icon" style="width:100%" class="project-image">
            <h4>B.M.E</h4>
            <p>
                B.M.E is a basic map editor, this editor focus on 2D maps.
                It was made for personal uses and handle the basic tools necessary to create simple maps.
            </p>
        </a>
    </div>
</div>

<div class="title">Social links</div>

<div class="contact">
    <div class="contact-link">
        <a href="javacript:void(0)" on:click={clipboard}>
            <img src="img/discord.png" alt="discord" style="width:100%">
        </a>
    </div>
    <div class="contact-link">
        <a href="https://www.patreon.com/Blackoutburst" target="_blank" rel="noopener noreferrer">
            <img src="img/patreon.png" alt="patreon" style="width:100%">
        </a>
    </div>
    <div class="contact-link">
        <a href="https://github.com/Blackoutburst" target="_blank" rel="noopener noreferrer">
            <img src="img/github.png" alt="github" style="width:100%">
        </a>
    </div>
    <div class="contact-link">
        <a href="https://www.youtube.com/channel/UCOmdNokN6UVeNhDfB61B_0A" target="_blank" rel="noopener noreferrer">
            <img src="img/youtube.png" alt="youtube" style="width:100%">
        </a>
    </div>
    <div class="contact-link">
        <a href="https://steamcommunity.com/id/blackoutburst/" target="_blank" rel="noopener noreferrer">
            <img src="img/steam.png" alt="github" style="width:100%">
        </a>
    </div>
</div>

<div class="footer">
    <p class="footer-title">© Blackoutburst</p>
</div>

<script>
    import Swal from 'sweetalert2'

    function clipboard() {

        navigator.clipboard.writeText("Blackoutburst#7021");
        Swal.fire({title: 'Blackoutburst#7021',
        text: 'Was copied inside the clipboard!',
        background: '#202020',
        color: '#70458f',
        confirmButtonColor: '#7a51b5'});
    }
</script>


<style>

    .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 30vmin;
        border-radius: 50%;
        box-shadow: 0 8px 10px 0 rgb(0 0 0 / 40%);
    }
</style>
