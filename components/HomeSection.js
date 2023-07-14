"use client"

import Image from "next/image"
import { Tooltip } from "@/components/Tooltip"
import VanillaTilt from "vanilla-tilt"
import { useEffect } from "react"

export default function HomeSection() {

    useEffect(() => {
        if (document) {
            VanillaTilt.init(document.querySelector(".tilt"), { max: 2 })
        }
    }, [])


    return (
        <div className={"flex justify-between bg-[#130c1c] -z-50 w-full xl:h-full"}>
            <div className={"flex flex-col justify-center items-center xl:justify-start xl:items-start xl:mx-20 z-10 w-full xl:w-auto"}>
                <h1 className={"group -translate-x-10 sm:-translate-x-20 xl:translate-x-0 xl:mx-10 mt-20 xl:mt-40 z-50 scale-[40%] sm:scale-[60%] md:scale-[75%] xl:scale-100 whitespace-nowrap"}>

                    <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-24 -translate-x-[60px] -translate-y-[80px] animate-pulse -z-10"} src={"/plus.svg"}/>
                    <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-32 translate-y-[50px] translate-x-[480px]  2xl:translate-y-0 2xl:translate-x-[550px] animate-pulse -z-10"} src={"/plus2.svg"}/>
                    <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-96 scale-150 -translate-x-[100px] -translate-y-[80px] -z-10"} src={"/line.svg"}/>
                    <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-96 scale-150 translate-x-[200px] translate-y-[20px] -z-10"} src={"/line.svg"}/>

                    Hi!&nbsp;
                    I&apos;m&nbsp;
                    <div className={"absolute w-96 h-[42px] overflow-hidden translate-x-[170px] -translate-y-[48px]"}>
                        <span className={"w-96 h-16 absolute bg-clip-text text-transparent bg-gradient-to-r from-[#452277] to-[#9061d1] duration-300 group-hover:translate-y-[42px]"}>Florian Chanson</span>
                        <span className={"w-96 h-16 absolute bg-clip-text text-transparent bg-gradient-to-r from-[#452277] to-[#9061d1] duration-300 -translate-y-[42px] group-hover:translate-y-[0px]"}>Blackoutburst</span>
                    </div>
                    <br/>
                    Lead Developer
                </h1>

                <p className={"scale-[60%] m-2 sm:scale-100 sm:m-10 z-50 whitespace-nowrap -translate-y-10 xl:translate-y-0"}>
                    A French developer specialized in JVM technologies<br/>Currently working at&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.barbablanka.com/" className={"text-[#f59ad2] font-bold"}>Barbablanka</a>&nbsp;
                    on Web/Android projects.
                </p>
                <div className={"flex gap-6 sm:gap-10 sm:mx-10 z-50"}>
                    <Tooltip message="blackoutburst">
                        <Image width={0} height={0} alt={"discord logo"} className={"w-6 h-6 sm:w-8 sm:h-8 select-none cursor-help z-50"} src={"/discord-logo.svg"}/>
                    </Tooltip>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Blackoutburst/" className={"z-50 hover:scale-110 duration-300"}>
                        <Image width={0} height={0} alt={"github logo"} className={"w-6 h-6 sm:w-8 sm:h-8 select-none cursor-pointer z-50"} src={"/github-logo.svg"}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@blackoutburst803/" className={"z-50 hover:scale-110 duration-300"}>
                        <Image width={0} height={0} alt={"youtube logo"} className={"w-6 h-6 sm:w-8 sm:h-8 select-none cursor-pointer z-50"} src={"/youtube-logo.svg"}/>
                    </a>
                    <Image width={0} height={0} alt={"linkedin logo"} className={"w-6 h-6 sm:w-8 sm:h-8 select-none cursor-not-allowed z-50"} src={"/linkedin-logo.svg"}/>
                </div>
            </div>

            <div className={"select-none hidden translate-x-0 2xl:translate-x-20 xl:flex relative justify-center items-center opacity-70 mt-32 z-40"}>
                <div className={"tilt w-full h-full flex relative justify-center items-center z-20 rounded-full"} data-tilt>
                    <div className={"absolute bg-gradient-to-r from-[#452277] to-[#9061d1] w-60 h-60 rounded-full shadow-2xl"} />
                    <Image width={2048} height={2048} alt={"logo"} className={"w-56 h-56 rounded-full z-10"} src={"/logo.webp"} priority />
                </div>
                <Image width={0} height={0} alt={"logo"} className={"absolute w-96 h-96 coil"} src={"/coil.svg"} priority />
            </div>

            <div/>
                <div className={"select-none absolute scale-50 md:scale-75 xl:scale-100 right-0"}>
                <div className={"select-none rotating border-[#452277] -right-[100px] -top-[100px] absolute w-[200px] h-[200px] border-2 border-dashed rounded-full"}/>
                <div className={"select-none rrotating border-[#9061d1] -right-[150px] -top-[150px] absolute w-[300px] h-[300px] border-2 border-dashed rounded-full"}/>
            </div>

            <div className={"absolute -top-10 -left-[80px] sm:top-0 sm:left-0 bg-[#27183b] h-56 w-56 rounded-full blur-2xl opacity-40 scale-50 md:scale-75 xl:scale-100"} />
            <div className={"absolute -top-30 -left-[180px] sm:top-0 sm:left-0 bg-[#27183b] translate-x-40 translate-y-20 h-56 w-56 rounded-full blur-2xl opacity-40 scale-50 md:scale-75 xl:scale-100"} />

            <div className={"relative scale-50 md:scale-75 xl:scale-100"}>
                <div className={"absolute bg-[#27183b] h-56 w-56 rounded-full blur-2xl opacity-30 right-10 bottom-0 z-10"} />
                <div className={"absolute bg-[#27183b] -translate-y-20 h-56 w-56 rounded-full blur-2xl opacity-30 right-10 bottom-0 z-10"} />
                <div className={"absolute translate-x-40 translate-y-10 bg-[#27183b] h-56 w-56 rounded-full blur-2xl opacity-30 right-10 bottom-0 z-10"} />
            </div>
        </div>
    )
}