import HomeSection from "@/components/HomeSection"
import AboutMeSection from "@/components/AboutMeSection"
import TechnoSections from "@/components/TechnoSections"
import ProjectsSections from "@/components/ProjectsSections"
import SocialsSections from "@/components/SocialsSection"

export default function Home() {
    return (
        <main className="xl:m-20">
            <div className={"relative xl:border-2 xl:border-dashed xl:border-[#28193e] xl:rounded-2xl z-50 overflow-hidden xl:shadow-sm bg-neutral-900"}>
                <HomeSection/>
                <div className={"relative select-none w-full auto -z-40 rotate-180 -translate-y-[1px] scale-x-[200%] md:scale-x-100"}>
                    <img alt={"wave"} className={"-z-40"} src={"/wave.svg"}/>
                </div>
                <AboutMeSection/>
                <TechnoSections/>
                <ProjectsSections/>
                <SocialsSections/>
            </div>
        </main>
    )
}