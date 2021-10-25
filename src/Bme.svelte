<div class="navbar">
    <a href="index.html"><img src="img/pfp.jpg" alt="logo" class="nav-icon" style="border-radius: 50%"></a>
    <a href="wally.html"><img src="img/wally.png" alt="wally" class="nav-icon"></a>
    <a href="hitw.html"><img src="img/hitw.png" alt="hitw" class="nav-icon"></a>
    <a href="quake.html"><img src="img/quake.png" alt="quake" class="nav-icon"></a>
    <a href="aow.html"><img src="img/aow.png" alt="aow" class="nav-icon"></a>
    <a href="pong.html"><img src="img/pong.png" alt="pong" class="nav-icon"></a>
    <a href="pixel.html"><img src="img/pixel.png" alt="ps" class="nav-icon" style="border-radius: 20px"></a>
    <a href="falling.html"><img src="img/falling.png" alt="falling" class="nav-icon"></a>
    <a href="bme.html"><img src="img/bme.png" alt="bme" class="nav-icon"></a>
</div>

<header>
    <div class="header">
        <img src="img/bme.png" alt="logo" class="logo">
        <p class="title">B.M.E</p>
    </div>
</header>

<div class="about">
    <h1 class="about-title">About this project</h1>
    <p>
        Blackoutburst Map Editor aka B.M.E<br>
        Is a project made somewhere in 2018<br>
        <br>
        I made it because I wanted to see if I could do a map editor<br>
        It never really got big, full of features, but that was the best I could do back in the days<br>
        <br>
        Today this editor only has a personal use purpose and got used in some of my projects<br>
    </p>
</div>

<div class="features">
    <h1 class="features-title">Features</h1>
    <p>
        All features are explained on the <a href="https://github.com/Blackoutburst/Black-Map-Editor" target="_blank" rel="noopener noreferrer">GitHub</a><br>
        So I'm not really going to go in details here<br>
        We can load and save maps toggle a bunch of things rotate tiles and so on
    </p>
    <img src="img/bme1.png" alt="bme1" class="features-img">
    <p class="note">(Main editor view)</p>

    <p>
        We can change the skybox to pretty much anything we want<br>
        And place lights that cast shadows in real time if we move them
    </p>
    <img src="img/bme2.png" alt="bme2" class="features-img">
    <p class="note">(On the left side we can see our tiles and on the right side our skybox)</p>
    <p>
        We can load our own tiles texture and skybox<br>
        And show multiples information on how big the map is or even the grid placement
    </p>
    <img src="img/bme3.png" alt="bme3" class="features-img">
    <p class="note">(Blue means background tiles red means solid tiles and green is decoration or light)</p>

</div>

<div class="links">
    <h1 class="links-title">Find this project</h1>

    <a href="https://github.com/Blackoutburst/Black-Map-Editor" target="_blank" rel="noopener noreferrer">
        <img src="img/github.png" alt="github" class="links-img">
    </a>
</div>

<div class="links">
    <h1 class="links-title">Made with</h1>

    <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/java.png" alt="java" class="links-img">
    </a>

    <a href="https://www.lwjgl.org/" target="_blank" rel="noopener noreferrer">
        <img src="img/lwjgl.png" alt="lwjgl" class="links-img">
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
