import Image from "next/image"
import { Tooltip } from "@/components/Tooltip"

export default function SocialsSections() {

    return (
        <div className={"relative flex flex-col w-[200%] -translate-x-1/4 bg-[#130c1c] h-fit rounded-t-[50%] border-t-[#9061d1] border-t-2"}>
            <div className={"flex flex-col justify-center items-center z-50 w-full py-10"}>
                <div className={"flex gap-6 sm:gap-10 sm:mx-10 z-50 h-full"}>
                    <Tooltip message="blackoutburst">
                        <Image width={0} height={0} alt={"discord logo"} className={"w-8 h-8 select-none cursor-help z-50"} src={"/discord-logo.svg"}/>
                    </Tooltip>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Blackoutburst/" className={"z-50 hover:scale-110 duration-300"}>
                        <Image width={0} height={0} alt={"github logo"} className={"w-8 h-8 select-none cursor-pointer z-50"} src={"/github-logo.svg"}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@blackoutburst803/" className={"z-50 hover:scale-110 duration-300"}>
                        <Image width={0} height={0} alt={"youtube logo"} className={"w-8 h-8 select-none cursor-pointer z-50"} src={"/youtube-logo.svg"}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/florian-chanson-92bb90284/" className={"z-50 hover:scale-110 duration-300"}>
                        <Image width={0} height={0} alt={"linkedin logo"} className={"w-8 h-8 select-none cursor-pointer z-50"} src={"/linkedin-logo.svg"}/>
                    </a>
                </div>
            </div>
            <span className={"text-xs sm:text-base w-full self-center justify-self-center text-center bg-clip-text text-transparent bg-gradient-to-r from-[#452277] to-[#9061d1]"}>
                    © Florian &quot;Blackoutburst&quot; Chanson - 2023
            </span>

        </div>
    )
}