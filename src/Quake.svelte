<div class="navbar">
    <a href="index.html"><img src="img/pfp.jpg" alt="logo" class="nav-icon" style="border-radius: 50%"></a>
    <a href="aow.html"><img src="img/aow.png" alt="aow" class="nav-icon"></a>
    <a href="hitw.html"><img src="img/hitw.png" alt="hitw" class="nav-icon"></a>
    <a href="quake.html"><img src="img/quake.png" alt="quake" class="nav-icon"></a>
    <a href="wally.html"><img src="img/wally.png" alt="wally" class="nav-icon"></a>
    <a href="pong.html"><img src="img/pong.png" alt="pong" class="nav-icon"></a>
    <a href="pixel.html"><img src="img/pixel.png" alt="ps" class="nav-icon" style="border-radius: 20px"></a>
    <a href="falling.html"><img src="img/falling.png" alt="falling" class="nav-icon"></a>
    <a href="bme.html"><img src="img/bme.png" alt="bme" class="nav-icon"></a>
</div>

<header>
    <div class="header">
        <img src="img/quake.png" alt="logo" class="logo">
        <p class="title">QUAKECRAFT</p>
    </div>
</header>

<div class="about">
    <h1 class="about-title">About this project</h1>
    <p>
        This project doesn't really have any story<br>
        I enjoyed playing Quake and I was wondering how hard it could be to make one<br>
        Turns out it was really easy to do so this project was made in less than a week<br>
        <br>
        At first it wasn't supposed to have gun customisation but some friends asked for it<br>
        A bit later on Rackals one of the biggest Hypixel QuakeCraft player asked for multiples map support<br>
        And since I'm just adding new features based on player request such as kill sounds and trigger/dash speed<br>
    </p>

    <img src="img/rackals-quote.png" alt="rackals-quote" class="features-img"><br>
    <img src="img/galiano-quote.png" alt="galiano-quote" class="features-img">

</div>

<div class="features">

    <h1 class="features-title">Demo</h1>
    This is a raw footage video I'm sorry, the real preview video is W.I.P
    <iframe class="features-vid" src="https://www.youtube.com/embed/rEMI-Klku4Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <h1 class="features-title">Features</h1>
    <p>
        All features are explained on the <a href="https://github.com/Blackoutburst/QuakeCraft" target="_blank" rel="noopener noreferrer">GitHub</a><br>
        But the main ones are obviously the Railgun and the dash mechanics
    </p>
    <img src="img/railgun.png" alt="railgun" class="features-img">
    <p class="note">(During a game from my POV)</p>

    <p>
        Full game only solo mode, first one to 25 point win the game
    </p>
    <img src="img/quake-game.png" alt="game" class="features-img"><br>
    <img src="img/quake-scoreboard.png" alt="game" class="features-img">
    <img src="img/quake-chat.png" alt="game" class="features-img">
    <p class="note">(Yeah, I know it's literally Hypixel QuakeCraft at this point sorry)</p>

    <p>
        The gun customisation menu<br>
        It is divided in 6 parts:<br>
        - Main menu<br>
        - Gun item menu<br>
        - Explosion shape menu<br>
        - Explosion color menu<br>
        - Kill sound<br>
        - Name color<br>
    </p>
    <img src="img/quake-menu.png" alt="menu" class="features-img">
    <img src="img/quake-menu2.png" alt="menu" class="features-img"><br>
    <img src="img/quake-menu3.png" alt="menu" class="features-img">
    <img src="img/quake-menu4.png" alt="menu" class="features-img"><br>
    <img src="img/quake-menu1.png" alt="menu" class="features-img">
    <img src="img/quake-menu5.png" alt="menu" class="features-img">
    <p class="note">(Like I said this wasn't supposed to be a feature but whatever)</p>

</div>

<div class="links">
    <h1 class="links-title">Find this project</h1>

    <a href="https://github.com/Blackoutburst/QuakeCraft" target="_blank" rel="noopener noreferrer">
        <img src="img/github.png" alt="github" class="links-img">
    </a>
</div>

<div class="links">
    <h1 class="links-title">Made with</h1>

    <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/java.png" alt="java" class="links-img">
    </a>

    <a href="https://www.spigotmc.org/" target="_blank" rel="noopener noreferrer">
        <img src="img/spigot.png" alt="spigot" class="links-img">
    </a>
</div>

<div id="clipboard"></div>

<div class="footer">
    <p class="footer-title">© Blackoutburst</p>
</div>

<style>
@font-face {
  font-family: customFontCoda;
  src: url("../font/coda.ttf");
}

@media only screen and (min-width: 1200px) {
    .features-vid {
        width: 60vw;
        height: calc(60vw * 9 / 16);
    }
}

@media only screen and (max-width: 1200px) {
    .features-vid {
        width: 50vw;
        height: calc(50vw * 9 / 16);
    }
}

@media only screen and (max-width: 1200px) {
    .links-img {
        max-width: 15vw;
        padding: 10px;
        margin: 10px;
    }
}

@media only screen and (min-width: 1200px) {
    .links-img {
        max-width: 7%;
        padding: 10px;
        margin: 10px;
    }
}

.links {
    margin-top: 80px;
    padding: 10px;
    text-align: center;
    color: white;
}

@media only screen and (min-width: 1200px) {
    .links-title {
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
    .links-title {
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
    .features-img {
        max-width: 50%;
    }
}

@media only screen and (max-width: 1200px) {
    .features-img {
        max-width: 80%;
    }
}

@media only screen and (max-width: 1200px) {
    .features {
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
    .features {
        text-align: center;
        font-size: 26px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #d4b5ff;
        padding-bottom: 40px;
    }
}


@media only screen and (min-width: 1200px) {
    .features-title {
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
    .note {
        text-align:center;
        font-size: 3vw;
        margin-left: 40px;
        margin-right: 40px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
        font-style: italic;
        color: #4f396e;
    }
}

@media only screen and (min-width: 1200px) {
    .note {
        text-align:center;
        font-size: 26px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
        font-style: italic;
        color: #4f396e;
    }
}

@media only screen and (max-width: 1200px) {
    .features-title {
        background: #bf00ff;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: customFontCoda;
        font-weight: bold;
        font-size: 5vw;
        color: white;
    }
}

@media only screen and (max-width: 1200px) {
    .about {
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
    .about {
        text-align: center;
        font-size: 26px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #d4b5ff;
        padding-bottom: 40px;
    }
}


@media only screen and (min-width: 1200px) {
    .about-title {
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
    .about-title {
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
}
</style>
