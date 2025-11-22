
const SectionIntro = ({ subtitle, title }) => {
    return (
        <div className="py-[1.25rem]">
            <h3 className="uppercase tracking-[.25em]">{subtitle}</h3>
            <h1 className="uppercase text-[2.1rem]">{title}</h1>
        </div>
    )
}

export default SectionIntro