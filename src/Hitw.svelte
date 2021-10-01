<header>
    <div class="header">
        <img src="img/hitw.png" alt="logo" class="logo">
        <p class="title">Hole in the Wall</p>
    </div>
</header>

<div class="about">
    <h1 class="about-title">About this project</h1>
    <p>
        This project started around November 2020<br>
        At first this was just a joke about a dream of a player (<a href="https://hypixel.net/members/hammyinthewall.154763/" target="_blank" rel="noopener noreferrer">HammyInTheWall</a>) had<br>
        This dream was a joke version of the game, so I started making this for fun<br>
        <br>
        Later I realized I was able to work on something real instead of a joke dream<br>
        And this is when I started working on a full plugin acting as a server core<br>
        <br>
        The plugin today is different from the Hypixel Hole in the Wall<br>
        You do not compete against players but instead have access to a bunch of options<br>
        The whole point of this was to create a place to train and experiment<br>
        <br>
        Today this plugin run on our community server and have seen a bunch of improvements<br>
        New functionality got added on people demands such as duels and custom walls<br>
    </p>
</div>

<div class="features">
    <h1 class="features-title">Features</h1>
    <p>
        I really don't have much to explain here about this plugins features<br>
        Everything is already explained on the <a href="https://github.com/Blackoutburst/HitW-plugin" target="_blank" rel="noopener noreferrer">GitHub</a> of this project<br>
        <br>
        The Hole in the Wall game is the main features all you do is play freely<br>
    </p>
    <img src="img/hitw-game.png" alt="game" class="features-img">
    <p class="note">(Game screenshot on the current map)</p>
    <p>
        The option menu to play the game the way you want to play it<br>
        Every option is explained on the GitHub<br>
    </p>
    <img src="img/hitw-menu.png" alt="menu" class="features-img">
    <p class="note">(The screenshot is a bit outdated now we can see our stats on the bottom right)</p>

    <p>
        A game summary system so you can see what you did wrong<br>
    </p>
    <img src="img/game-summary.png" alt="summary" class="features-img">
    <p class="note">(All you need to know about your game in one place)</p>

    <p>
        This plugin also contains a duel system after months on request by the community<br>
        There is also a <a href="https://www.youtube.com/watch?v=3O-An6CLEao" target="_blank" rel="noopener noreferrer">video (Flashing light)</a> of me coding the duel system<br>
    </p>
    <img src="img/duel.png" alt="duel" class="features-img">
    <p class="note">(You have no idea of much time they asked me for that)</p>

    <p>
        And for the last big gameplay features we have the party/coop system<br>
        When inside a party player can play together on the same wall or even make party duels<br>
    </p>
    <img src="img/party.png" alt="party" class="features-img">
    <p class="note">(What ? It's nearly the same as the Hypixel one ? Nah just your imagination)</p>
    <p>
        And last, there is an API system used to receive players score<br>
        This API is used in another project of mine: <a href="wally.html" target="_blank" rel="noopener noreferrer">Wally</a><br>
    </p>
    <p class="note">(Not much to says here sadly)</p>
</div>

<div class="links">
    <h1 class="links-title">Find this project</h1>

    <a href="https://namemc.com/server/hitw.minesr.com" target="_blank" rel="noopener noreferrer">
        <img src="img/ip.png" alt="ip" class="links-img">
    </a>

    <a href="https://github.com/Blackoutburst/HitW-plugin" target="_blank" rel="noopener noreferrer">
        <img src="img/github.png" alt="github" class="links-img">
    </a>

    <a href="javacript:void(0)" target="_blank" rel="noopener noreferrer">
        <img src="img/youtube.png" alt="youtube" class="links-img">
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
        background: -webkit-linear-gradient(#823ba1, #5d38a8);
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
        background: -webkit-linear-gradient(#823ba1, #5d38a8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 5vw;
        color: white;
    }
}

.footer-title {
    font-family: customFontCoda;
    background: -webkit-linear-gradient(#823ba1, #5d38a8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1vmax;
}

.footer {
    margin-top: 80px;
    padding: 10px;
    background: rgb(22,8,40);
    background: linear-gradient(49deg, rgb(20, 14, 31) 0%, rgba(34, 22, 48) 38%, rgba(20, 14, 31) 100%);
    text-align: left;
    color: white;
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
        background: -webkit-linear-gradient(#823ba1, #5d38a8);
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
        color: #3a2b4f;
    }
}

@media only screen and (min-width: 1200px) {
    .note {
        text-align:center;
        font-size: 26px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;
        font-style: italic;
        color: #3a2b4f;
    }
}

@media only screen and (max-width: 1200px) {
    .features-title {
        background: -webkit-linear-gradient(#823ba1, #5d38a8);
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
        background: -webkit-linear-gradient(#823ba1, #5d38a8);
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
        background: -webkit-linear-gradient(#823ba1, #5d38a8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: customFontCoda;
        font-weight: bold;
        font-size: 5vw;
        color: white;
    }
}

.title {
    font-family: customFontCoda;
    background: -webkit-linear-gradient(#823ba1, #5d38a8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 3vmax;
}

.header {
    padding: 40px;
    background: rgb(22,8,40);
    background: linear-gradient(49deg, rgb(20, 14, 31) 0%, rgba(34, 18, 51) 38%, rgba(20, 14, 31) 100%);
    text-align: center;
    color: white;
    font-size: 40px;
}

.logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 15vmax;
}
</style>
