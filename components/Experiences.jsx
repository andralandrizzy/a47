"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import SectionIntro from "./SectionIntro"

const Experiences = () => {
    return (
        <section className="w-full dark:bg-gray-900">
            <div className="max-w-[1920px] mx-auto p-6">
                <SectionIntro subtitle="experiences" title="My Job History" />
                <Timeline>
                    <Timeline.Item>
                        <Timeline.Point className="text-orange-500" icon={HiCalendar} />
                        <Timeline.Content>
                            <Timeline.Time className="ml-[2rem]">February 2022</Timeline.Time>
                            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
                            <Timeline.Body>
                                Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                                E-commerce & Marketing pages.
                            </Timeline.Body>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </div>

        </section>
    )
}

export default Experiences