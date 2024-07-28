import { Label, TextInput, Textarea } from "flowbite-react";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md";
import SectionIntro from "./SectionIntro";


const Contact = () => {
    return (
        <section id="contact" className="bg-white w-full dark:bg-gray-900 mx-auto">
            <div className="max-w-[1920px] p-6">
                <SectionIntro subtitle="Reach out" title="Contact me" />
                <div className="w-full flex gap-4 my-4">
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
                    <div className="w-full flex flex-col text-center items-center justify-center">
                        <div className="email">
                            <div className="flex items-center justify-center text-[1.8rem]">
                                <MdOutlineEmail /><h2 className="ml-2 tracking-widest dark:text-white"> Email</h2>
                            </div>
                            <p className="text-[1.4rem] leading-8 text-orange-500">andralorelus@ao.com</p>
                        </div>
                        <div className="phone my-5">
                            <div className="flex items-center justify-center text-[1.8rem]">
                                <MdOutlinePhone /><h2 className="ml-2 tracking-widest dark:text-white"> Phone</h2>
                            </div>
                            <p className="text-[1.4rem] leading-8 text-orange-500">(305)444-4444</p>
                        </div>
                        <div className="email">
                            <div className="flex items-center justify-center text-[1.8rem]">
                                <MdOutlineLocationOn /><h2 className="ml-2 tracking-widest dark:text-white"> Location</h2>
                            </div>
                            <p className="text-[1.4rem] leading-8 text-orange-500">Miami, FL</p>
                            <p className="text-[1.4rem] leading-8 text-orange-500">Phoenix, AZ</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact