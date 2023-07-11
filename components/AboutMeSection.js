import Image from "next/image"

export default function AboutMeSection() {
    return (
        <div className={"flex flex-col space-y-20 justify-center items-center w-full mb-10"}>
            <h2 className={"relative z-20 mt-10 sm:mt-0"}>
                About me

                <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-1/2 animate-pulse -translate-x-[40px] -translate-y-[80px] md:-translate-x-[100px] md:-translate-y-[100px] scale-75 md:scale-100"} src={"/plus2.svg"}/>
                <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-2/3 animate-pulse translate-x-[90px] -translate-y-[10px] md:translate-x-[140px] md:-translate-y-[10px] scale-75 md:scale-100"} src={"/plus.svg"}/>
                <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-full scale-[150%] md:scale-[200%] -translate-x-[60px] -translate-y-[50px] md:-translate-x-[80px] md:-translate-y-[80px]"} src={"/line.svg"}/>
                <Image width={0} height={0} alt={"decoration"} className={"select-none absolute w-full scale-[150%] md:scale-[200%] translate-x-[60px] -translate-y-[30px] md:translate-x-[100px] md:-translate-y-[30px]"} src={"/line.svg"}/>
            </h2>

            <div className={"absolute rotate-12 w-[200vw] h-32 bg-neutral-800 -z-50"} />


            <Image width={0} height={0} alt={"decoration"} className={"hidden md:inline-block select-none absolute w-56 animate-pulse left-10 -translate-y-[340px] xl:-translate-y-[440px] rotate-45 scale-75 xl:scale-100"} src={"/hexagon.svg"}/>
            <Image width={0} height={0} alt={"decoration"} className={"hidden md:inline-block select-none absolute w-56 animate-pulse right-0 -translate-y-[320px] -rotate-12 scale-75 xl:scale-100"} src={"/circle.svg"}/>

            <div className={"flex flex-col sm:flex-row space-y-10 md:space-y-0 md:flex justify-evenly items-center mx-10 sm:mt-0 sm:mx-20"}>
                <p className={"w-full md:w-1/2 xl:w-1/3"}>
                    My name is Florian Chanson, but I&apos;m better known online as &quot;Blackoutburst&quot;. I&apos;m a passionate developer that love to works with Kotlin and create various projects.
                    <br/><br/>
                    I started learning programming back in 2012 to create Minecraft mods. Later on in 2015 I started creating my first standalone game project using OpenGL.
                    <br/><br/>
                    Few years later I started working on Android project and created a few small games and released one on the Google Play Store as a test in 2020.
                    <br/><br/>
                    I went to a programming school in wich I was not really enjoying myself, after 3 years I got hired by Barbablanka as a Full stack developer and got promoted to Lead developer soon after.
                </p>
                <div className={"flex flex-col md:grid justify-center items-center grid-cols-1 xl:grid-cols-2 gap-5 xl:gap-20 w-full md:w-1/3 xl:w-1/2"}>
                    <div className={"boutme-border justify-self-center"}>
                        <div className={"boutme"}>
                            <h3>Name</h3>
                            <span className={"text-white font-thin"}>Florian Chanson</span>
                        </div>
                    </div>
                    <div className={"boutme-border justify-self-center"}>
                        <div className={"boutme"}>
                            <h3>Nickname</h3>
                            <span className={"text-white font-thin"}>Blackoutburst</span>
                        </div>
                    </div>
                    <a href={"mailto:f.chanson@barbablanka.com"} className={"hover:scale-105 duration-300 justify-self-center"}>
                        <div className={"boutme-border"}>
                            <div className={"boutme"}>
                                <h3>Email</h3>
                                <span className={"text-white font-thin"}>f.chanson@barbablanka.com</span>
                            </div>
                        </div>
                    </a>
                    <div className={"boutme-border justify-self-center"}>
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