import Image from "next/image"

export default function TechnoSections() {
    return (
        <div className={"relative w-full bg-neutral-800 h-fit"}>
            <div className={"flex flex-col gap-12 items-center p-10 pb-16 z-50 w-full"}>
                <div>
                    <h2>Technologies</h2>
                    <div className={"bg-gradient-to-r from-[#29ffbf] to-[#862fde] w-full h-0.5 rounded-t-full"} />
                </div>

                <div className={"flex flex-wrap justify-evenly items-center lg:gap-20 w-full mx-20"}>
                    <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/" className={"flex justify-center items-center z-50 w-32 h-32 relative scale-50 lg:scale-75 xl:scale-100 lg:hover:-rotate-12 duration-300"}>
                        <Image width={0} height={0} alt={"nextjs logo"} className={"absolute w-32 scale-[250%] -translate-x-3 translate-y-1 select-none cursor-pointer z-50"} src={"/nextjs.svg"}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.java.com/" className={"flex justify-center items-center z-50 w-32 h-32 relative scale-50 lg:scale-75 xl:scale-100 lg:hover:rotate-12 duration-300"}>
                        <Image width={0} height={0} alt={"java logo"} className={"absolute w-24 scale-[260%] -translate-y-5 select-none cursor-pointer z-50"} src={"/java.svg"}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://kotlinlang.org/" className={"flex justify-center items-center z-50 w-32 h-32 relative scale-50 lg:scale-75 xl:scale-100 lg:hover:-rotate-12 duration-300"}>
                        <Image width={0} height={0} alt={"kotlin logo"} className={"absolute w-24 scale-[310%] select-none cursor-pointer z-50"} src={"/kotlin.svg"}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.android.com/" className={"flex justify-center items-center z-50 w-32 h-32 relative scale-50 lg:scale-75 xl:scale-100 lg:hover:rotate-12 duration-300"}>
                        <Image width={0} height={0} alt={"android logo"} className={"absolute w-24 scale-[240%] -translate-x-2 select-none cursor-pointer z-50"} src={"/android.svg"}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.javascript.com/" className={"flex justify-center items-center z-50 w-32 h-32 relative scale-50 lg:scale-75 xl:scale-100 lg:hover:-rotate-12 duration-300"}>
                        <Image width={0} height={0} alt={"javascript logo"} className={"absolute w-24 scale-[240%] select-none cursor-pointer z-50"} src={"/javascript.svg"}/>
                    </a>
                </div>
            </div>


            <div className={"select-none absolute scale-50 md:scale-75 xl:scale-100 left-0 top-0 -z-10"}>
                <div className={"select-none rotating border-[#452277] -left-[100px] -bottom-[100px] absolute w-[200px] h-[200px] border-2 border-dashed rounded-full z-0"}/>
                <div className={"select-none rrotating border-[#9061d1] -left-[150px] -bottom-[150px] absolute w-[300px] h-[300px] border-2 border-dashed rounded-full z-0"}/>
            </div>
        </div>
    )
}