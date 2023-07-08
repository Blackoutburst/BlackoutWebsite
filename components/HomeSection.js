import Image from "next/image"

export default function HomeSection() {
    return (
        <div className={"flex justify-between bg-[#130c1c] -z-50 w-full h-56 xl:h-full"}>
            <div className={"mx-auto xl:mx-20 -translate-x-20 xl:translate-x-0 scale-50 xl:scale-100"}>
                <h1 className={"group relative m-10 xl:mt-40 z-20"}>

                    <Image width={0} height={0} alt={"decoration"} className={"absolute w-24 -translate-x-[60px] -translate-y-[80px] animate-pulse z-10"} src={"/plus.svg"}/>
                    <Image width={0} height={0} alt={"decoration"} className={"absolute w-32 translate-x-[550px] animate-pulse z-10"} src={"/plus2.svg"}/>
                    <Image width={0} height={0} alt={"decoration"} className={"absolute w-96 scale-150 -translate-x-[100px] -translate-y-[80px] z-10"} src={"/line.svg"}/>
                    <Image width={0} height={0} alt={"decoration"} className={"absolute w-96 scale-150 translate-x-[200px] translate-y-[20px] z-10"} src={"/line.svg"}/>

                    Hi!&nbsp;
                    I&apos;m&nbsp;
                    <div className={"absolute w-96 h-[42px] overflow-hidden translate-x-[170px] -translate-y-[48px]"}>
                        <span className={"w-96 h-16 absolute bg-clip-text text-transparent bg-gradient-to-r from-[#452277] to-[#9061d1] duration-300 group-hover:translate-y-[42px]"}>Florian Chanson</span>
                        <span className={"w-96 h-16 absolute bg-clip-text text-transparent bg-gradient-to-r from-[#452277] to-[#9061d1] duration-300 -translate-y-[42px] group-hover:translate-y-[0px]"}>Blackoutburst</span>
                    </div>
                    <br/>
                    Lead Developer
                </h1>

                <p className={"m-10 w-full"}>
                    A French developer specialized in JVM technologies<br/>Currently working at&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://www.barbablanka.com/" className={"text-[#f59ad2] font-bold"}>Barbablanka</a>&nbsp;
                    on Web/Android projects.
                </p>
            </div>
            <div className={"hidden xl:flex relative flex justify-center items-center opacity-70 mt-32 z-10"}>
                <Image width={2048} height={2048} alt={"logo"} className={"w-56 h-56 rounded-full z-10"} src={"/logo.webp"} priority/>
                <div className={"absolute bg-gradient-to-r from-[#452277] to-[#9061d1] w-60 h-60 rounded-full shadow-2xl"} />
            </div>

            <div/>
            <div className={"absolute scale-50 xl:scale-100 right-0"}>
            <div className={"rotating border-[#452277] -right-[100px] -top-[100px] absolute w-[200px] h-[200px] border-2 border-dashed rounded-full"}/>
            <div className={"rrotating border-[#9061d1] -right-[150px] -top-[150px] absolute w-[300px] h-[300px] border-2 border-dashed rounded-full"}/>
            </div>
        </div>
    )
}