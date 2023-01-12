<script>
    import { onMount } from "svelte";

    let cells = []

    let gameRunning = false

    let canvas
    let ctx
    let width = 600
    let height = 600
    let cellSize = 120

    let timer

    let holeNumber = 8

    let time = 120
    let score = 0

    const drawQuad = (x, y, w, h, active, hole = false) => {
        if (hole) {
            ctx.clearRect(x, y, w, h)
            return
        }
        ctx.fillStyle = active ? '#FF880055' : '#606060'
        ctx.strokeStyle = active ? '#CC880055' : '#808080'
        ctx.fillRect(x, y, w, h)
        ctx.strokeRect(x, y, w, h)
    }

    const activeNeightbor = (current) => {
        for (let cell of cells) {
            if ((current.x - cellSize === cell.x && current.y === cell.y && cell.active) ||
                (current.x + cellSize === cell.x && current.y === cell.y && cell.active) ||
                (current.y - cellSize === cell.y && current.x === cell.x && cell.active) ||
                (current.y + cellSize === cell.y && current.x === cell.x && cell.active))
                return true
        }
        return false
    }

    const generateHoles = () => {
        let holes = 0

        while (holes !== holeNumber) {
            for (let cell of cells) {
                let rng = Math.floor(Math.random() * 100)
                if (rng === 0 && !cell.ishole) {
                    holes++
                    cell.ishole = true
                    drawQuad(cell.x, cell.y, cellSize, cellSize, false, true)
                    break
                }
            }
        }
    }

    const cleanBoard = () => {
        cells = []
        for (let y = 0; y < height; y += cellSize)
            for (let x = 0; x < width; x += cellSize)
                cells.push({x, y, active: false, ishole: false})

        for (let cell of cells) {
            drawQuad(cell.x, cell.y, cellSize, cellSize)
        }
    }

    const gameTick = () => {
        time--

        if (time <= 0) {
            clearInterval(timer)
            checkScore()
            gameRunning = false
        }
    }

    const startGame = () => {
        time = 120
        if (timer)
            clearInterval(timer)
        timer = setInterval(() => {gameTick()}, 1000)
        score = 0
        cleanBoard()
        generateHoles()
        gameRunning = true
    }

    const checkScore = () => {
        let points = 0
        let mistake = 0

        for (let cell of cells) {
            if (cell.ishole && cell.active)
                points++
            if (!cell.ishole && cell.active)
                mistake++
        }
        points = points - mistake
        if (mistake != 0)
            points -= 1
        if (points < 0)
            points = 0

        score += points
    }

    const flickLever = () => {
        if (!gameRunning) return
        checkScore()
        cleanBoard()
        generateHoles()
    }

    function onClick(e) {
        if (!gameRunning) return
        let mouse = {x: e.offsetX, y: e.offsetY}

        for (let cell of cells) {
            if (mouse.x > cell.x && mouse.x < cell.x + cellSize && mouse.y > cell.y && mouse.y < cell.y + cellSize && //AA-BB
                (cell.active || (cell.x === 0 || cell.x === width - cellSize || cell.y === 0 || cell.y === height - cellSize) || activeNeightbor(cell))) { //Edge or neighbor
                cell.active = !cell.active
                drawQuad(cell.x, cell.y, cellSize, cellSize, cell.active, cell.ishole && !cell.active)
            }
        }
    }
  
    onMount(() => {
        ctx = canvas.getContext("2d")
        canvas.addEventListener("mousedown", onClick, false)
        cleanBoard()
    })
</script>

<div class='w-screen h-screen p-5'>
    <p class="text-center text-white text-4xl">HitW 2D</p>
    <p on:click={() => startGame()} class="cursor-pointer absolute top-5 left-5 text-center text-white text-3xl bg-orange-400 rounded-lg w-fit px-4 py-2">Start</p>
    <p on:click={() => {cellSize = 120, holeNumber = 8, cleanBoard()}} class="cursor-pointer absolute top-5 left-[130px] text-center text-white text-3xl bg-orange-400 rounded-lg w-16 px-4 py-2">Q</p>
    <p on:click={() => {cellSize = 60, holeNumber = 32, cleanBoard()}} class="cursor-pointer absolute top-5 left-[210px] text-center text-white text-3xl bg-orange-400 rounded-lg w-16 px-4 py-2">F</p>
    <p class="absolute top-20 left-5 text-center text-white text-3xl">Score: {score}</p>
    <p class="absolute top-32 left-5 text-center text-white text-3xl">Time: {Math.floor(time / 60) + ":" + (time % 60 ? time % 60 : '00')}</p>
    <div class="w-full h-full flex justify-center items-center space-x-10">
        <canvas bind:this={canvas} width={width} height={height} class="border border-white"/>
        <div on:click={() => flickLever()} class="flex justify-center items-center cursor-pointer text-white text-3xl bg-orange-400 rounded-full w-24 h-24">
            <p>
                Lever
            </p>
        </div>
    </div>

</div>

<style lang="postcss" global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>