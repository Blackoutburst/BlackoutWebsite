import HomeSection from "@/components/HomeSection"
import AboutMeSection from "@/components/AboutMeSection"
import TechnoSections from "@/components/TechnoSections"

export default function Home() {
    return (
        <main className="xl:m-20">
            <div className={"relative xl:border-2 xl:border-dashed xl:border-[#28193e] xl:rounded-2xl z-50 overflow-hidden xl:shadow-sm bg-neutral-900"}>
                <HomeSection/>
                <div className={"select-none w-full auto -z-40 rotate-180 -translate-y-[1px]"}>
                    <img src={"/wave.svg"}/>
                </div>
                <AboutMeSection/>
                <TechnoSections/>
            </div>
        </main>
    )
}