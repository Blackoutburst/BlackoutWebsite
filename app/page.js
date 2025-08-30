"use client"
import Image from "next/image"
import { useEffect, useState } from "react"


export default function Home() {
    const [vh, setVh] = useState(0)
    
    useEffect(() => {
        const handleResize = () => {
            setVh(window.innerHeight)
        }
        
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    
    return (
        <main>
            <Image
                width={0} 
                height={0}
                src="/bg.svg"
                alt="background"
                className="absolute top-0 left-0 -z-50 w-screen object-cover opacity-70 select-none"
                style={{ height: vh }}
            />
            <div 
                className="flex flex-col w-full justify-center items-center gap-6 p-4 pt-8 overflow-hidden max-w-screen max-h-screen"
                style={{ height: vh }}
            >
                <h1>
                    BLACKOUTBURST
                </h1>
                <p className="text-center">
                    I&apos;m a developer with strong abilities in the JVM ecosystem<br/>
                    When I&apos;m not working I usually play video games<br/>
                    Currently working at <a href="https://primal.tech/">Primal</a> as Android dev
                </p>
                <p>
                    If for some reasons you need/want to contact me:<br/>
                    - <a target="_blank" rel="noopener noreferrer" href="https://discord.com/">Discord</a>: blackoutburst (fast reply)<br/>
                    - <a target="_blank" rel="noopener noreferrer" href="mailto:me@blackoutburst.com">E-Mail</a>: me@blackoutburst.com (slow reply)
                </p>
                <div className="flex justify-center items-center gap-4">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Blackoutburst/" className={"z-50 hover:scale-110 duration-300"}>
                        <Image width={0} height={0} alt={"github logo"} className={"icons select-none cursor-pointer z-50"} src={"/github-logo.svg"}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@blackoutburst803/" className={"z-50 hover:scale-110 duration-300"}>
                        <Image width={0} height={0} alt={"youtube logo"} className={"icons select-none cursor-pointer z-50"} src={"/youtube-logo.svg"}/>
                    </a>
                </div>
                <Image width={256} height={256} alt={"pic"} className={"pic select-none cursor-pointer z-50"} src={"/pp.webp"}/>
            </div>
        </main>
    )
}
