import Image from "next/image"


export default function Home() {
    return (
        <main className="flex w-full justify-center items-center w-screen h-screen">
            <Image
                width={0} 
                height={0}
                alt={"background"}
                src="/bg.svg"
                alt="Background"
                className="absolute -z-50 w-full h-full object-cover opacity-70"
            />
            <div className="flex flex-col justify-center items-center gap-6 m-4">
                <h1>
                    BLACKOUTBURST
                </h1>
                <h2>
                    About
                </h2>
                <p className="text-center">
                    I'm a developer with strong ability in the JVM ecosystem<br/>
                    When I'm not working I usually play video games<br/>
                    Currently working at <a href="https://primal.tech/">Primal</a> as Android dev
                </p>
                <h2>
                    Contact
                </h2>
                <p>
                    If for some reaons you need/want to contact me:<br/>
                    - <a target="_blank" rel="noopener noreferrer" href="https://discord.com/">Discord</a>: blackoutburst (fast reply)<br/>
                    - <a target="_blank" rel="noopener noreferrer" href="mailto:me@blackoutburst.com">E-Mail</a>: me@blackoutburst.com (slow reply)
                </p>
                <h2>
                    Links
                </h2>
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
