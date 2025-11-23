import SectionIntro from "./SectionIntro"
import Image from "next/image"
import Link from "next/link"

const Work = () => {
    const recentWork = [
        {
            id: 1,
            title: "Product Design",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima`,
            imageUrl: '/img/work3.png'

        },
        {
            id: 2,
            title: "Web Design food",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima`,
            imageUrl: '/img/work2.png'

        },
        {
            id: 3,
            title: "Realestate website",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima`,
            imageUrl: '/img/work.png'

        },
        {
            id: 4,
            title: "Web Design",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima`,
            imageUrl: '/img/work4.png'

        },
        {
            id: 5,
            title: "Lil Brother Site",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima`,
            imageUrl: '/img/work5.png'

        },
        {
            id: 6,
            title: "Skate site Product ",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima`,
            imageUrl: '/img/work6.png'

        },
        {
            id: 7,
            title: "Old tradition site design",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima`,
            imageUrl: '/img/work7.png'

        },
        {
            id: 8,
            title: "Security Design",
            desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima`,
            imageUrl: "/img/work8.png"

        },
    ]
    return (
        <section id="work" className="w-full py-[2rem] text-center dark:bg-gray-900">
            <div className="max-w-[83.33%] mx-auto p-6">
                <SectionIntro subtitle="work" title="Recent projects" />
                <div className="grid lg:grid-cols-3 gap-7 overflow-hidden">
                    {recentWork.map((work) => (
                        <Link href={'/'}>
                            <div className="relative projectImgContain shadow-md w-[450px] h-[430px]" key={work.id}>
                                <Image alt="Mountains"
                                    src={work.imageUrl}
                                    className="projectImg"
                                    fill
                                />
                                <div className="absolute opacity-0 rounded-[15px] hover:opacity-100 text-white bg-[#03010196]
                            top-[0%] left-[0%] h-[100%] w-full  sm:w-full  md:w-1/3  lg:w-full  
                            xl:w-1/2 flex items-center justify-center"><h2 className="text-[1.2rem]">
                                        {work.title}</h2></div>
                            </div>
                        </Link>


                    ))}
                </div>
            </div>
        </section>

    )
}

export default Work
