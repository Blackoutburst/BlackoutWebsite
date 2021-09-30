<header>
    <div class="header">
        <img src="img/quake.png" alt="myLogo" class="logo">
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
        So yeah, just a simple plugin made for my own learning experience
    </p>
</div>

<div class="features">
    <h1 class="features-title">Features</h1>
    <p>
        All features are explained on the <a href="https://github.com/Blackoutburst/QuakeCraft" target="_blank" rel="noopener noreferrer">GitHub</a><br>
        But the main ones are obviously the Railgun and the dash mechanics
    </p>
    <img src="img/railgun.png" alt="discord" class="features-img">
    <p class="note">(Railgun in action)</p>

    <p>
        Full game only solo mode, first one to 25 point win the game
    </p>
    <img src="img/quake-game.png" alt="discord" class="features-img">
    <p class="note">(Yeah, I know it's literally Hypixel QuakeCraft at this point sorry)</p>

    <p>
        The gun customisation menu, this screenshot is only the main page<br>
        It is divided in 3 parts the gun item, the explosion shape and explosion color
    </p>
    <img src="img/quake-menu.png" alt="discord" class="features-img">
    <p class="note">(Like I said this wasn't supposed to be a feature but whatever)</p>

</div>

<div class="links">
    <h1 class="links-title">Find this project</h1>

    <a href="javacript:void(0)" target="_blank" rel="noopener noreferrer">
        <img src="img/youtube.png" alt="discord" class="links-img">
    </a>

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
        <img src="img/spigot.png" alt="jda" class="links-img">
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
