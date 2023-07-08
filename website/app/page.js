import HomeSection from "@/components/HomeSection"
import AboutMeSection from "@/components/AboutMeSection"

export default function Home() {
    return (
        <main className="xl:m-20">
            <div className={"relative xl:border-2 xl:border-dashed xl:border-[#28193e] xl:rounded-2xl z-50 overflow-hidden xl:shadow-sm bg-neutral-900"}>
                <div className={"absolute flex justify-center items-center w-full gap-10 p-4 scale-75 xl:scale-100"}>
                    <p>Home</p>
                    <p>About</p>
                    <p>Techno</p>
                    <p>Projects</p>
                    <p>Socials</p>
                </div>

                <HomeSection/>
                <div className={"w-full auto -z-40 rotate-180"}>
                    <img src={"/wave.svg"}/>
                </div>
                <AboutMeSection/>
            </div>
        </main>
    )
}