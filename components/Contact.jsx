"use client"


import { Label, TextInput, Textarea } from "flowbite-react";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md";
import SectionIntro from "./SectionIntro";
import Lottie from "lottie-react";
import contactData from '@/public/img/contact.json'

const Contact = () => {
    return (
        <section id="contact" className="bg-white w-full dark:bg-gray-900 mx-auto">
            <div className="max-w-[1920px] p-6">
                <SectionIntro subtitle="Reach out" title="Contact me" />
                <div className="w-full lg:flex gap-6 my-4">
                    <form className="form w-full">
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="firstname" value="First Name" />
                            </div>
                            <TextInput
                                id="firstname"
                                placeholder="Enter first name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="lastname" value="Last Name" />
                            </div>
                            <TextInput
                                id="lastname"
                                placeholder="Enter last name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="Enter email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <div className="mb-2 block">
                                <Label htmlFor="comment" value="Your message" />
                            </div>
                            <Textarea id="comment" placeholder="Leave me a message..." required rows={6} />
                        </div>
                        <button type="button" className="text-white bg-orange-500 hover:bg-orange-900 focus:ring-4 
                    focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-8 py-4 mt-4 text-center 
                    dark:orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Send Message</button>
                    </form>
                    <div className="mt-[3.5rem] lg:mt-0 w-full h-[460px] relative">
                        <Lottie animationData={contactData} />
                        <div className="bg-[#484747da] h-[460px] dark:bg-[#0f081db6] img-contact
                        flex flex-col text-end items-end justify-center pr-8">
                            <div className="email">
                                <div className="flex items-center justify-end text-[1.8rem] text-orange-500">
                                    <MdOutlineEmail /><h2 className="ml-2 tracking-widest"> Email</h2>
                                </div>
                                <p className="text-[1.4rem] leading-8 text-[#ffffff] dark:text-[#a39e9e]">andralorelus@ao.com</p>
                            </div>
                            <div className="phone my-5">
                                <div className="flex items-center justify-end text-[1.8rem] text-orange-500">
                                    <MdOutlinePhone /><h2 className="ml-2 tracking-widest"> Phone</h2>
                                </div>
                                <p className="text-[1.4rem] leading-8 text-[#ffffff] dark:text-[#a39e9e]">(305)444-4444</p>
                            </div>
                            <div className="email">
                                <div className="flex items-center justify-end text-[1.8rem] text-orange-500">
                                    <MdOutlineLocationOn /><h2 className="ml-2 tracking-widest"> Location</h2>
                                </div>
                                <p className="text-[1.4rem] leading-8 text-[#ffffff] dark:text-[#a39e9e]">Miami, FL</p>
                                <p className="text-[1.4rem] leading-8 text-[#ffffff] dark:text-[#a39e9e]">Phoenix, AZ</p>
                                <p className="text-[1.4rem] leading-8 text-[#ffffff] dark:text-[#a39e9e]">Atlanta, GA</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact