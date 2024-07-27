"use client"
import Image from "next/image"
import Link from "next/link"
import imageHero from '@/public/img/hero.svg'
import { ReactTyped } from "react-typed";



const Hero = () => {
    return (
        <section className="bg-white relative h-[95vh] videoBg border-b-2 border-[#74747413] w-full dark:bg-gray-900 mx-auto py-6 
        place-content-center">
            <video loop
                autoPlay
                muted
                src="/videos/bgvid2.mp4"
                type="video/mp4"
                className="bgVideo w-[100%] xl:max-w-[1920px] mx-auto">
            </video>
            <div className="hero-content bg-[#f2eeee28] dark:bg-[#04061e72] grid w-[100%] xl:max-w-[1920px] px-6 py-0 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                <div className="flex mr-auto lg:col-span-7 w-[100%]">
                    <div className="my-[5rem]">
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

                <div className="hidden pt-5 lg:mt-0 lg:col-span-5 h-[90%] w-[100%] lg:flex">
                    <Image src={imageHero} alt="mockup" />
                </div>
            </div>

        </section>
    )
}

export default Hero