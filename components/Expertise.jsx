import { FaLightbulb } from "react-icons/fa";
import { TbGlobeFilled } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { MdOutlinePhonelinkSetup } from "react-icons/md";


import SectionIntro from "./SectionIntro"

const Expertise = () => {
    return (
        <section id="services" className="bg-white w-full dark:bg-gray-900 mx-auto">
            <div className="max-w-[1920px] mx-auto p-6">
                <SectionIntro subtitle="What i do " title="Some of my expertise" />
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-[2.5rem] py-8">
                    <div className="flex flex-col items-center justify-center lg:w-[250px] pb-4 border-b-2 border-[#2855c0]">
                        <div className="ace flex justify-center items-center w-[85px] h-[85px] bg-[#2855c0]">
                            <i><FaLightbulb className="text-white text-[2rem] mt-[20px]" /></i>
                        </div>
                        <h1 className="uppercase text-[1.35rem] pt-5">Graphic Design</h1>
                        <p className="lg:text-center py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, earum.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center lg:w-[250px] pb-4 border-b-2 border-[#e76127]">
                        <div className="pen flex justify-center items-center w-[85px] h-[85px] bg-[#e76127]">
                            <i><TbGlobeFilled className="text-white text-[2rem]" /></i>
                        </div>
                        <h1 className="uppercase text-[1.35rem] pt-5">Software</h1>
                        <p className="lg:text-center py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, earum.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center lg:w-[250px] pb-4 border-b-2 border-[#e1de2b]">
                        <div className="ace flex justify-center items-center w-[85px] h-[85px] bg-[#e1de2b]">
                            <i><FaCode className="text-white text-[2rem] mt-[20px]" /></i>
                        </div>
                        <h1 className="uppercase text-[1.35rem] pt-5">Web Developer</h1>
                        <p className="lg:text-center py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, earum.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center lg:w-[250px] pb-4 border-b-2 border-[#5d3b78]">
                        <div className="pen flex justify-center items-center w-[85px] h-[85px] bg-[#5d3b78]">
                            <i><MdOutlinePhonelinkSetup className="text-white text-[2rem]" /></i>
                        </div>
                        <h1 className="uppercase text-[1.35rem] pt-5">Application</h1>
                        <p className="lg:text-center py-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, earum.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise