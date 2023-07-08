import Image from "next/image"

export default function AboutMeSection() {
    return (
        <div className={"flex flex-col space-y-20 justify-center items-center w-full mb-20"}>
            <h2 className={"z-20"}>About me</h2>

            <Image width={0} height={0} alt={"decoration"} className={"absolute w-32 animate-pulse translate-x-[180px] -translate-y-[320px]"} src={"/plus2.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"absolute w-24 animate-pulse -translate-x-[180px] -translate-y-[250px]"} src={"/plus.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"absolute w-96 -translate-x-[80px] -translate-y-[280px]"} src={"/line.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"absolute w-96 translate-x-[40px] -translate-y-[240px]"} src={"/line.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"absolute w-56 animate-pulse -translate-x-[300%] -translate-y-[320px] rotate-45"} src={"/hexagon.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"absolute w-56 animate-pulse translate-x-[300%] -translate-y-[220px] -rotate-12"} src={"/circle.svg"}/>

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
                            <p>Florian Chanson</p>
                        </div>
                    </div>
                    <div className={"boutme-border"}>
                        <div className={"boutme"}>
                            <h3>Nickname</h3>
                            <p>Blackoutburst</p>
                        </div>
                    </div>
                    <a href={"mailto:f.chanson@barbablanka.com"}>
                        <div className={"boutme-border"}>
                            <div className={"boutme"}>
                                <h3>Email</h3>
                                <p>f.chanson@barbablanka.com</p>
                            </div>
                        </div>
                    </a>
                    <div className={"boutme-border"}>
                        <div className={"boutme"}>
                            <h3>Country</h3>
                            <p>France</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}