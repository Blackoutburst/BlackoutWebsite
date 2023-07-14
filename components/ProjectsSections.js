"use client"

import Image from "next/image"
import VanillaTilt from "vanilla-tilt"
import { useEffect } from "react"

export default function ProjectsSections() {

    const projects = [
        {
            title: "Wally",
            description: "Discord bot tracking Hypixel Hole in the Wall players data",
            cover: "/wally.webp",
            link: "https://github.com/Blackoutburst/Wally"
        },
        {
            title: "Age of War",
            description: "Minecraft plugin re creating the famous Flash game Age of War",
            cover: "/aow.webp",
            link: "https://github.com/Blackoutburst/AoW-plugin"
        },
        {
            title: "Rhythm Pong",
            description: "Game of Pong full of effect, following the rhythme of a song",
            cover: "/pong.webp",
            link: "https://github.com/Blackoutburst/Rhythm-Pong"
        },
        {
            title: "Pixel Starship",
            description: "Retro like small shooter game available on Android",
            cover: "/ps.webp",
            link: "https://play.google.com/store/apps/details?id=com.blackoutburst.pixelstarship"
        },
        {
            title: "QuakeCraft",
            description: "Minecraft plugin re creating the famous game Quake",
            cover: "/quake.webp",
            link: "https://github.com/Blackoutburst/QuakeCraft"
        },
        {
            title: "B.M.E",
            description: "Small 2D map editor",
            cover: "/bme.webp",
            link: "https://github.com/Blackoutburst/Black-Map-Editor"
        },
    ]

    useEffect(() => {
        if (document) {
            VanillaTilt.init(document.querySelectorAll(".tilt"), { max: 2 })
        }
    }, [])

    return (
        <div className={"flex flex-col space-y-20 justify-center items-center w-full h-fit relative mt-20 mb-40"}>
            <h2 className={"relative z-20 mt-10 sm:mt-0"}>
                Projects

                <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-1/2 animate-pulse -translate-x-[40px] -translate-y-[80px] md:-translate-x-[100px] md:-translate-y-[100px] scale-75 md:scale-100"} src={"/plus2.svg"}/>
                <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-2/3 animate-pulse translate-x-[90px] -translate-y-[10px] md:translate-x-[140px] md:-translate-y-[10px] scale-75 md:scale-100"} src={"/plus.svg"}/>
                <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-full scale-[150%] md:scale-[200%] -translate-x-[60px] -translate-y-[50px] md:-translate-x-[80px] md:-translate-y-[80px]"} src={"/line.svg"}/>
                <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-full scale-[150%] md:scale-[200%] translate-x-[60px] -translate-y-[30px] md:translate-x-[100px] md:-translate-y-[30px]"} src={"/line.svg"}/>
            </h2>

            <Image width={0} height={0} alt={"decoration"} className={"hidden md:inline-block select-none absolute w-56 animate-pulse left-10 top-0 translate-y-[140px] rotate-45 scale-75 xl:scale-100"} src={"/square.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"hidden md:inline-block select-none absolute w-56 animate-pulse right-0 top-0 -translate-y-[40px] -rotate-12 scale-75 xl:scale-100"} src={"/circle.svg"}/>

            <Image width={0} height={0} alt={"decoration"} className={"hidden md:inline-block select-none absolute w-56 animate-pulse right-28 bottom-0 -translate-y-[340px] rotate-12 scale-75 xl:scale-100"} src={"/hexagon.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"hidden md:inline-block select-none absolute w-56 animate-pulse left-0 bottom-0 -translate-y-[40px] -rotate-12 scale-75 xl:scale-100"} src={"/triangle.svg"}/>


            <div className={"absolute -rotate-12 w-[200vw] h-32 bg-neutral-800 -z-50"} />

            <div className={"flex flex-col w-full sm:w-auto justify-center items-center sm:grid sm:grid-cols-2 gap-10 lg:gap-20 xl:gap-40 mx-10"}>
                {projects.map(p => (
                    <a key={p.link} target="_blank" rel="noopener noreferrer" href={p.link}>
                        <div className={"tilt shadow-lg bg-gradient-to-r from-[#29ffbf] to-[#862fde] sm:w-72 w-56 h-56 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-xl p-0.5 overflow-hidden"} data-tilt>
                            <div className={"relative flex flex-col justify-center items-center bg-neutral-900 w-full h-full rounded-xl overflow-hidden"}>
                                <Image priority={true} width={1000} height={1000} alt={"cover"} className={"absolute blur-[2px] brightness-50 select-none bg-cover bg-center scale-[200%]"} src={p.cover}/>
                                <span className={"select-none z-10 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#452277] to-[#9061d1] brightness-150"}>{p.title}</span>
                                <p className={"text-center select-none z-10 sm:mx-10"}>
                                    {p.description}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className={"select-none absolute scale-50 md:scale-75 xl:scale-100 right-0 bottom-0 -z-10"}>
                <div className={"select-none rotating border-[#452277] -left-[100px] -bottom-[400px] md:-bottom-[300px] xl:-bottom-[250px] absolute w-[200px] h-[200px] border-2 border-dashed rounded-full z-0"}/>
                <div className={"select-none rrotating border-[#9061d1] -left-[150px] -bottom-[450px] md:-bottom-[350px] xl:-bottom-[300px] absolute w-[300px] h-[300px] border-2 border-dashed rounded-full z-0"}/>
            </div>
        </div>
    )
}