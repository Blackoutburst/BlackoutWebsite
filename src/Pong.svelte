<header>
    <div class="header">
        <img src="img/pong.png" alt="myLogo" class="logo">
        <p class="title">RHYTHM PONG</p>
    </div>
</header>

<div class="about">
    <h1 class="about-title">About this project</h1>
    <p>
        I first started this project somewhere in 2019<br>
        At first it was just supposed to be a cool looking pong game<br>
        <br>
        The early development was made during Spanish class in highschool.....<br>
        And this project evolved a few times with two major version<br>
        <br>
        The first major version is the Java version on this made with LWJGL in 2019<br>
        And the second major version is one made with Unity and C# made in summer 2020
    </p>
</div>

<div class="features">
    <h1 class="features-title">Features</h1>
    <p>
        Talking about features here is a bit strange because it's literally a pong game<br>
        So let's talk about the main two version instead
    </p>

    <h1 class="features-title">Java version 2019 (LWJGL)</h1>
    <p>
        This version actually works like a real pong game, by that I mean it's possible to score<br>
        But keeping the game this way made it almost impossible to sync correctly with the song<br>
        <br>
        All the arena and the ball are made using GLSL shaders<br>
        Particles, on the other hands, are just some texture with additive colors blending<br>
        <br>
        The bots know where to go using a ghost ball system running at full speed<br>
        This ghost ball work like the real ball to determine where the real ball is going to hit<br>
    </p>

    <img src="img/old-pong.png" alt="discord" class="features-img">
    <p class="note">(A screenshot of the Java version)</p>

    <div class="links">
        <h1 class="links-title">Find this version</h1>

        <a href="https://www.youtube.com/watch?v=HrEQaj-_Z4E" target="_blank" rel="noopener noreferrer">
            <img src="img/youtube.png" alt="discord" class="links-img">
        </a>

        <a href="https://github.com/Blackoutburst/Pong-song-sync" target="_blank" rel="noopener noreferrer">
            <img src="img/github.png" alt="github" class="links-img">
        </a>
    </div>

    <div class="links">
        <h1 class="links-title">Made with</h1>

        <a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
            <img src="img/java.png" alt="java" class="links-img">
        </a>

        <a href="https://www.lwjgl.org/" target="_blank" rel="noopener noreferrer">
            <img src="img/lwjgl.png" alt="jda" class="links-img">
        </a>
    </div>

    <h1 class="features-title">C# version 2020 (Unity)</h1>
    <p>
        This version only exist because i wanted to try something with Unity and had no idea<br>
        In this version there are a few modifications such as:<br>
        <br>
        - The arena shader<br>
        - The ball trail<br>
        - Particles using shader<br>
        - Gravity center pulling the ball to the middle<br>
        - No more song desync (so no way to score as well)
        <br>
    </p>

    <img src="img/new-pong.png" alt="discord" class="features-img">
    <p class="note">(A screenshot of the C# version)</p>

</div>

<div class="links">
    <h1 class="links-title">Find this project</h1>

    <a href="https://www.youtube.com/watch?v=q3KTWuEAKY0" target="_blank" rel="noopener noreferrer">
        <img src="img/youtube.png" alt="discord" class="links-img">
    </a>

    <a href="https://github.com/Blackoutburst/Rhythm-Pong" target="_blank" rel="noopener noreferrer">
        <img src="img/github.png" alt="github" class="links-img">
    </a>
</div>

<div class="links">
    <h1 class="links-title">Made with</h1>

    <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
        <img src="img/csharp.png" alt="java" class="links-img">
    </a>

    <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
        <img src="img/unity.png" alt="jda" class="links-img">
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
