"use client"
import Image from "next/image"
import Link from "next/link"
import { ReactTyped } from "react-typed";
import Lottie from "lottie-react";
import heroData from '@/public/img/devhero1.json'



const Hero = () => {
    return (
        <section className="bg-white relative h-[98vh] videoBg border-b-2 border-[#74747413] w-full dark:bg-gray-900 mx-auto 
        place-content-center">
            <video
                oncontextmenu="return false;"
                loop
                autoPlay
                muted
                src="/videos/bgvid2.mp4"
                type="video/mp4"
                className="bgVideo w-[100%] xl:max-w-full mx-auto">
            </video>
            <div className="hero-content bg-[#00000028] dark:bg-[#04061e72] w-[100%]">
                <div className="h-[100%] flex items-center justify-around  w-[100%]">
                    <div className="flex flex-col justify-center items-start lg:p-[8rem] p-4 mx-auto">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-wide leading-none md:text-5xl xl:text-6xl 
                    text-white">
                            <span className="leading-10	text-[1.85rem] tracking-[5.45px] text-[#c9c5c5]">
                                {" "}<ReactTyped
                                    strings={["Web Developer", "Web Designer", "Programmer", "Painter", "Content Creator"]}
                                    typeSpeed={100}
                                    loop
                                    backSpeed={18}
                                    cursorChar=" _"
                                    showCursor={true}
                                />
                            </span>
                            <br /> Andral Orelus</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-100 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <div className="btn">
                            <Link href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-orange-500 border-2 border-orange-500
                    rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                Learn More
                                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path></svg>
                            </Link>
                            <Link href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-[#dadada] border-2 
                    border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 
                    dark:focus:ring-gray-800">
                                Hire Me
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hidden h-[100%] w-[100%] lg:flex">
                    {/* <Image src={imageHero} alt="mockup" /> */}
                    <Lottie animationData={heroData} />
                </div>
            </div>

        </section>
    )
}

export default Hero