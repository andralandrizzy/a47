import { FaMinus, FaPlus } from 'react-icons/fa'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";


import SectionIntro from './SectionIntro'
const Education = () => {
    const educationInfos = [
        {
            id: 1,
            level: "High school secondary education",
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima quasi 
            aliquam atque dolor qui veniam velit ullam laudantium? Earum architecto enim, assumenda, quia sapiente 
            officiis laudantium distinctio, aliquam quasi facilis est dolorem at dolor dicta.`,
        },
        {
            id: 2,
            level: "Diploma in Information Technology",
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima quasi 
            aliquam atque dolor qui veniam velit ullam laudantium? Earum architecto enim, assumenda, quia sapiente 
            officiis laudantium distinctio, aliquam quasi facilis est dolorem at dolor dicta.`,
        },
        {
            id: 3,
            level: "Diploma in Cyber Security",
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima quasi 
            aliquam atque dolor qui veniam velit ullam laudantium? Earum architecto enim, assumenda, quia sapiente 
            officiis laudantium distinctio, aliquam quasi facilis est dolorem at dolor dicta.`,
        },
        {
            id: 4,
            level: "Bachelor Degree of Computer Science",
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima quasi 
            aliquam atque dolor qui veniam velit ullam laudantium? Earum architecto enim, assumenda, quia sapiente 
            officiis laudantium distinctio, aliquam quasi facilis est dolorem at dolor dicta.`,
        },
        {
            id: 5,
            level: "Bachelor Degree of Graphic Design",
            details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, 
            inventore deserunt excepturi itaque amet ab dolore porro, tenetur iure dolorem possimus cumque minima quasi 
            aliquam atque dolor qui veniam velit ullam laudantium? Earum architecto enim, assumenda, quia sapiente 
            officiis laudantium distinctio, aliquam quasi facilis est dolorem at dolor dicta.`,
        },
    ]

    return (
        <section id='education' className="w-full dark:bg-gray-900  ">
            <div className="max-w-screen-xl p-4 mx-auto">
                <SectionIntro subtitle="educations" title="Education" />
                <Accordion className='my-6'>
                    {
                        educationInfos.map(education => (
                            <AccordionPanel key={education.id}>
                                <AccordionTitle className='font-semibold uppercase'>{education.level}</AccordionTitle>
                                <AccordionContent>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        {education.details}
                                    </p>
                                </AccordionContent>
                            </AccordionPanel>
                        ))
                    }
                </Accordion>
            </div>


        </section>
    )
}

export default Education