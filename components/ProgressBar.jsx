const ProgressBar = ({ legend, percent, width, color }) => {
    return (
        <div className="w-full lg:w-5/6">
            <div className="flex items-center justify-between gap-4 mb-2">
                <h6
                    className="block font-sans text-base antialiased font-semibold 
                        leading-relaxed tracking-normal text-[.83rem] text-blue-gray-800">
                    {legend}
                </h6>
                <h6
                    className="block font-sans text-base antialiased font-semibold 
                        leading-relaxed tracking-normal text-[.83rem] text-blue-gray-800">
                    {percent}
                </h6>
            </div>
            <div className="relative mb-5 h-2.5 w-full overflow-hidden rounded-full 
                bg-gray-200 dark:bg-[#52515153]">
                <div className={`h-2.5 rounded-full ${color}`} style={{ width }}></div>
            </div>
        </div>
    )
}

export default ProgressBar