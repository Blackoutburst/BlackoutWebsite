<div class="navbar">
    <a href="index.html"><img src="img/pfp.jpg" alt="logo" class="nav-icon" style="border-radius: 50%"></a>
    <a href="hitw.html"><img src="img/hitw.png" alt="hitw" class="nav-icon"></a>
    <a href="quake.html"><img src="img/quake.png" alt="quake" class="nav-icon"></a>
    <a href="aow.html"><img src="img/aow.png" alt="aow" class="nav-icon"></a>
    <a href="pong.html"><img src="img/pong.png" alt="pong" class="nav-icon"></a>
    <a href="pixel.html"><img src="img/pixel.png" alt="ps" class="nav-icon" style="border-radius: 20px"></a>
    <a href="falling.html"><img src="img/falling.png" alt="falling" class="nav-icon"></a>
</div>

<header>
    <div class="header">
        <img src="img/wally.png" alt="logo" class="logo">
        <p class="title">WALLY</p>
    </div>
</header>

<div class="about">
    <h1 class="about-title">About this project</h1>
    <p>
        Wally is a discord bot initially started around September 2020<br>
        At first it was just a private bot for my own usage with no name<br>
        <br>
        But once I joined the Hole in the Wall community the bot blew up<br>
        This is when the bot got his look and his official name "Wally"<br>
        <br>
        The bot was initially made in JavaScript but got reworked in Java<br>
        Later in the development <a href="https://eatmyvenom.me/" target="_blank" rel="noopener noreferrer">@Venom</a> joined me and today the bot is still used every day<br>
    </p>
</div>

<div class="features">
    <h1 class="features-title">Features (Hypixel)</h1>
    <p>
        Wally contains a basic stats checking features using canvas<br>
        Stats are obtained using the Hypixel API
    </p>
    <img src="img/stats.png" alt="stats" class="features-img">
    <p class="note">(These are my stats for example)</p>

    <p>
        You can compare player stats
    </p>
    <img src="img/compare.png" alt="compare" class="features-img">
    <p class="note">(Note the color of the header is based on the discord roles color)</p>

    <p>
        Check all stats leaderboard
    </p>
    <img src="img/lead.png" alt="lead" class="features-img">
    <p class="note">(By all stats I mean: Wins/Walls/Finals/Qualification)</p>

    <p>
        Track user high score in real time<br>
        For this Wally use a personal database of every member on the discord server<br>
        Then on a regular basis compare his database score with user score inside the Hypixel API
    </p>
    <img src="img/track.png" alt="track" class="features-img">
    <p class="note">(This is the first person to ever reach 450+ :O)</p>

    <h1 class="features-title">Features (Practice server)</h1>
    <p>
        Wally can also access stats from the <a href="hitw.html" target="_blank" rel="noopener noreferrer">community practice server</a><br>
        Most features are similar only the header is different and the stats tracked as well
    </p>
    <img src="img/pstats.png" alt="pstats" class="features-img">
    <p class="note">(For example these are my practice stats)</p>
    <p>
        Practice server stats also support comparisons and leaderboard but not any tracker for new personal best<br>
        Instead, there is a graph than can go up to the last 100 games a player played
    </p>
    <img src="img/pgraph.png" alt="pgraph" class="features-img">
    <p class="note">(Here are my last 20 finals games, we can display from 2 to 100 games)</p>
</div>

<div class="links">
    <h1 class="links-title">Find this project</h1>

    <a href="https://discord.gg/Gh24vw5b54" target="_blank" rel="noopener noreferrer">
        <img src="img/discord.png" alt="discord" class="links-img">
    </a>

    <a href="https://github.com/Blackoutburst/Wally" target="_blank" rel="noopener noreferrer">
        <img src="img/github.png" alt="github" class="links-img">
    </a>
</div>

<div class="links">
    <h1 class="links-title">Made with</h1>

    <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/java.png" alt="java" class="links-img">
    </a>

    <a href="https://github.com/DV8FromTheWorld/JDA" target="_blank" rel="noopener noreferrer">
        <img src="img/jda.png" alt="jda" class="links-img">
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
        max-width: 30%;
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
    box-shadow: 0px 0px 10px 0px #0394fc;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 15vmax;
    border-radius: 50%;
}
</style>
