import Image from "next/image"

export default function AboutMeSection() {
    return (
        <div className={"flex flex-col space-y-20 justify-center items-center w-full mb-20"}>
            <h2 className={"z-20"}>About me</h2>

            <div className={"absolute rotate-12 w-[100vw] h-32 bg-neutral-800 -z-50"} />

            <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-32 animate-pulse translate-x-[180px] -translate-y-[420px]"} src={"/plus2.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-24 animate-pulse -translate-x-[180px] -translate-y-[350px]"} src={"/plus.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-96 -translate-x-[70px] -translate-y-[340px]"} src={"/line.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-96 translate-x-[30px] -translate-y-[290px]"} src={"/line.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-56 animate-pulse -translate-x-[300%] -translate-y-[320px] rotate-45"} src={"/hexagon.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-56 animate-pulse translate-x-[300%] -translate-y-[420px] -rotate-12"} src={"/circle.svg"}/>

            <div className={"flex justify-evenly items-center mx-20"}>
                <p className={"w-1/3"}>
                    My name is Florian Chanson, but I&apos;m better known online as &quot;Blackoutburst&quot;. I&apos;m a passionate developer that love to works with Kotlin and create various projects.
                    <br/><br/>
                    I started learning programming back in 2012 to create Minecraft mods. Later on in 2015 I started creating my first standalone game project using OpenGL.
                    <br/><br/>
                    Few years later I started working on Android project and created a few small games and released one on the Google Play Store as a test in 2020.
                    <br/><br/>
                    I went to a programming school in wich I was not really enjoying myself, after 3 years I got hired by Barbablanka as a Full stack developer and got promoted to Lead developer soon after.
                </p>
                <div className={"grid grid-cols-2 gap-20"}>
                    <div className={"boutme-border"}>
                        <div className={"boutme"}>
                            <h3>Name</h3>
                            <span className={"text-white font-thin"}>Florian Chanson</span>
                        </div>
                    </div>
                    <div className={"boutme-border"}>
                        <div className={"boutme"}>
                            <h3>Nickname</h3>
                            <span className={"text-white font-thin"}>Blackoutburst</span>
                        </div>
                    </div>
                    <a href={"mailto:f.chanson@barbablanka.com"} className={"hover:scale-105 duration-300"}>
                        <div className={"boutme-border"}>
                            <div className={"boutme"}>
                                <h3>Email</h3>
                                <span className={"text-white font-thin"}>f.chanson@barbablanka.com</span>
                            </div>
                        </div>
                    </a>
                    <div className={"boutme-border"}>
                        <div className={"boutme"}>
                            <h3>Country</h3>
                            <span className={"text-white font-thin"}>France</span>
                        </div>
                    </div>
                </div>
            </div>
            <div/>
        </div>
    )
}