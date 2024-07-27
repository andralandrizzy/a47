
const TaskStats = () => {
    return (
        <section className="w-full dark:bg-gray-900 ">
            <div className="grid lg:grid-cols-4 grid-cols-2 bg-section max-w-[1920px] mx-auto p-6 gap-5 
            justify-between items-center text-center text-white">
                <div>
                    <h2 className="text-[3rem]">512</h2>
                    <h3 className="text-[1.2rem]">Happy clients</h3>
                </div>
                <div>
                    <h2 className="text-[3rem]">500+</h2>
                    <h3 className="text-[1.2rem]">Projects</h3>
                </div>
                <div>
                    <h2 className="text-[3rem]">50+</h2>
                    <h3 className="text-[1.2rem]">Clients</h3>
                </div>
                <div>
                    <h2 className="text-[3rem]">15</h2>
                    <h3 className="text-[1.2rem]">Collaborations</h3>
                </div>
            </div>


        </section>
    )
}

export default TaskStats