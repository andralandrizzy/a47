import ProgressBar from "./ProgressBar"
import SectionIntro from "./SectionIntro"

const Skills = () => {
    const sskillsAttr = [
        {
            id: 1,
            legend: "PhotoShop",
            percent: 80,
            color: 'bg-blue-600',
        },
        {
            id: 2,
            legend: "PhotoShop",
            percent: 80,
            color: 'bg-blue-600',
        },
        {
            id: 1,
            legend: "PhotoShop",
            percent: 80,
            color: 'bg-blue-600',
        },
        {
            id: 1,
            legend: "PhotoShop",
            percent: 80,
            color: 'bg-blue-600',
        },
        {
            id: 1,
            legend: "PhotoShop",
            percent: 80,
            color: 'bg-blue-600',
        },
        {
            id: 1,
            legend: "PhotoShop",
            percent: 80,
            color: 'bg-blue-600',
        },
        {
            id: 1,
            legend: "PhotoShop",
            percent: 80,
            color: 'bg-blue-600',
        },
        {
            id: 1,
            legend: "PhotoShop",
            percent: 80,
            color: 'bg-blue-600',
        },
    ]
    return (
        <section id="skills" className="bg-white w-full dark:bg-gray-900 mx-auto">
            <div className="max-w-screen-xl mx-auto p-4">
                <SectionIntro subtitle="My Specialty" title="My skills" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia hic quae in est sapiente doloremque, voluptas laboriosam
                    nisi accusamus ea!</p>


                <div className="lg:flex my-6 gap-8 justify-between">
                    <div className="w-[100%]">
                        <ProgressBar legend='Photoshop' percent='80%' width='80%' color='bg-blue-600' />
                        <ProgressBar legend='Javascript & react, vue, angular' percent='85%' width='85%' color='bg-yellow-500' />
                        <ProgressBar legend='HTML5' percent='85%' width='85%' color='bg-red-500' />
                        <ProgressBar legend='MS:Excel & Powerpoint' percent='95%' width='95%' color='bg-fuchsia-800' />
                    </div>

                    <div className="w-[100%]">
                        <ProgressBar legend='WordPress' percent='85%' width='85%' color='bg-teal-400' />
                        <ProgressBar legend='SEO' percent='90%' width='90%' color='bg-pink-400' />
                        <ProgressBar legend='CSS3' percent='85%' width='85%' color='bg-blue-400' />
                        <ProgressBar legend='UX & UI Design' percent='90%' width='90%' color='bg-lime-500' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Skills