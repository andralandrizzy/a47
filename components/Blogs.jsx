import SectionIntro from "./SectionIntro"
import { Card, Button } from "flowbite-react";
import Image from "next/image";
import { CiUser, CiCalendarDate } from "react-icons/ci";


const Blogs = () => {
    const blogPost = [
        {
            id: 1,
            author: 'Andral Orelus',
            Date: 'Jun 16, 2024',
            title: 'More Bread than I can Count.',
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, inventore deserunt excepturi itaque amet ab dolore porro, 
            tenetur iure dolorem possimus cumque minima quasi aliquam`,
            imagePost: '/img/stats.webp',
        },
        {
            id: 2,
            author: 'Andral Orelus',
            Date: 'May 05, 2024',
            title: 'Do not count your chicken before they hatched .',
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, inventore deserunt excepturi itaque amet ab dolore porro, 
            tenetur iure dolorem possimus cumque minima quasi aliquam`,
            imagePost: '/img/code.png',
        },
        {
            id: 3,
            author: 'Andral Orelus',
            Date: 'Jul 26, 2024',
            title: 'A birth month with plenty stories to tell',
            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, inventore deserunt excepturi itaque amet ab dolore porro, 
            tenetur iure dolorem possimus cumque minima quasi aliquam`,
            imagePost: '/img/tip.webp',
        },
    ]

    return (
        <section id="blog" className="w-full dark:bg-gray-900">
            <div className="max-w-screen-xl mx-auto p-4">
                <SectionIntro subtitle="read" title="recent blogs" />
                <div className="flex flex-wrap gap-7 items-center">
                    {blogPost.map((blog) => (
                        <Card
                            className="max-w-sm"
                            renderImage={() => <Image src={blog.imagePost}
                                className="w-[100%] h-[250px]"
                                width={1000}
                                height={0}
                                layout="cover"
                                quality={80}
                                alt="post blog" />}
                        >
                            <div className="h-[300px] max-w-full">
                                <div className="flex mb-8 justify-between">
                                    <p> {blog.author}</p>
                                    <p>{blog.Date}</p>
                                </div>
                                <h5 className="text-2xl mb-5 font-bold tracking-tight text-gray-900 dark:text-white">
                                    {blog.title}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {blog.text}
                                </p>
                            </div>
                            <Button className="dark:text-white text-[#000] mt-2 w-1/2 border border-orange-500">
                                Learn more
                            </Button>
                        </Card>
                    ))}

                </div>

            </div>


        </section>
    )
}

export default Blogs


// https://ik.imagekit.io/ikmedia/example_video.mp4