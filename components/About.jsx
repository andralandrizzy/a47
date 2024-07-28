import SectionIntro from "./SectionIntro"
import { FaLightbulb } from "react-icons/fa";
import { TbGlobeFilled } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import Image from "next/image";
import ProfilePic from '@/public/img/profile.JPG'


const About = (subtitle, title) => {
    return (
        <section id="about" className="bg-white w-full dark:bg-gray-900 flex mx-auto">
            <div className="max-w-[1920px] mx-auto p-6">
                <SectionIntro subtitle="About Me" title="Who am I" />
                <div className="lg:flex my-6 gap-6 justify-between lg:items-start">
                    <div className="aboutImg">
                        <Image src={ProfilePic} width={1040} height={500} />
                    </div>
                    <div className="aboutContent">
                        <p className="lg:pb-4 lg:pt-0 pt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur,
                            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus
                            cumque minima quasi aliquam atque dolor qui veniam velit ullam laudantium? Earum architecto enim,
                            assumenda, quia sapiente officiis laudantium distinctio, aliquam quasi facilis est dolorem at dolor dicta.</p>
                        <div className="flex flex-wrap gap-[3rem] py-6">
                            <div className="flex flex-col w-[150px] h-[150px] border-b-2 border-[#2855c0]">
                                <FaLightbulb className="text-[2.5rem] text-[#2855c0]" />
                                <h2 className="py-6">Graphic Design</h2>
                            </div>
                            <div className="flex flex-col w-[150px] h-[150px] border-b-2 border-[#e76127]">
                                <TbGlobeFilled className="text-[2.5rem] text-[#e76127]" />
                                <h2 className="py-6">Software</h2>
                            </div>
                            <div className="flex flex-col w-[150px] h-[150px] border-b-2 border-[#e1de2b]">
                                <FaCode className="text-[2.5rem] text-[#e1de2b]" />
                                <h2 className="py-6">Web Developer</h2>
                            </div>
                            <div className="flex flex-col w-[150px] h-[150px] border-b-2 border-[#5d3b78]">
                                <MdOutlinePhonelinkSetup className="text-[2.5rem] text-[#5d3b78]" />
                                <h2 className="py-6">Application</h2>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </section>

    )
}

export default About