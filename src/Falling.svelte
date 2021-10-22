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
        <img src="img/falling.png" alt="logo" class="logo">
        <p class="title">Falling Square</p>
    </div>
</header>

<div class="about">
    <h1 class="about-title">About this project</h1>
    <p>
        This project was done somewhere in 2020<br>
        We had to do a small project of our choice in school, and I decided to start this<br>
        <br>
        I eventually started adding a lot of levels as it was fun to do<br>
        But in the end the project got abandoned due to lack of motivation and ideas<br>
        <br>
        I think it still deserves to be shown here, but this will never be a finished project
    </p>
</div>

<div class="features">
    <h1 class="features-title">Features</h1>
    <p>
        In this game you move your player using the phone gyroscope<br>
        This creates a unique way of playing the game but make the game harder<br>
        <br>
        On each level you spawn on a purple square and need to reach the green one<br>
        To unlock the exit, you need to collect 3 coins placed inside every level<br>
        And if you hit any wall, you die and need to restart the level<br>
    </p>
    <img src="img/game.png" alt="game" class="features-img">
    <p class="note">(A simple screenshot of the game)</p>
    <p>
        This game should have featured 100 levels but only 50 were built before being abandoned<br>
        Once you finish a level, you unlock the next one
    </p>
    <img src="img/levels.png" alt="levels" class="features-img">
    <p class="note">(This is the level selection menu)</p>
</div>

<div class="links">
    <h1 class="links-title">Find this project</h1>

    <a href="https://github.com/Blackoutburst/FallingSquare" target="_blank" rel="noopener noreferrer">
        <img src="img/github.png" alt="github" class="links-img">
    </a>
</div>

<div class="links">
    <h1 class="links-title">Made with</h1>

    <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/java.png" alt="java" class="links-img">
    </a>

    <a href="https://www.android.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/android.png" alt="spigot" class="links-img">
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
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 15vmax;
}
</style>
