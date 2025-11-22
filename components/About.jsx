import SectionIntro from "./SectionIntro"
import { FaLightbulb } from "react-icons/fa";
import { TbGlobeFilled } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import Image from "next/image";
import ProfilePic from '@/public/img/dope.png'


const About = () => {
    return (
        <section id="about" className="bg-white grid w-full dark:bg-gray-900">
            <div className="lg:max-w-[83.33%] p-5 mx-auto text-center">
                <SectionIntro subtitle="About Me" title="Who am I" />
                <div className="aboutContent flex flex-col items-center">
                    <p className="py-4 lg:w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur,
                        inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus
                        cumque minima quasi aliquam atque dolor qui veniam velit ullam laudantium? Earum architecto enim,
                        assumenda, quia sapiente officiis laudantium distinctio, aliquam quasi facilis est dolorem at dolor dicta.</p>
                    <div className="lg:flex my-6 gap-6 justify-between lg:items-start">
                        <div className="w-[350px]">
                            <Image className="aboutImg" src={ProfilePic} width={0} height={0} />
                        </div>
                        <div className="lg:w-[800px] lg:px-[3rem]">
                            <p>
                                Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                .</p>
                            <p>
                                lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                .</p>
                            <p>
                                lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                .</p>
                        </div>

                    </div>
                </div>

            </div>



        </section>

    )
}

export default About