import {ProjectCard} from "@/widgets/Projects/ui/ProjectCard.tsx";


export const Projects = () => {

    return (
        <section className="  pb-[32px] md:pb-[clamp(48px,2.5vw,96px)] text-[#222222]">

            <div className="flex items-center gap-fluid-gapus  w-full pb-[32px] md:pb-fluid-gapns  ">
                <div className="flex-1 h-[1px] bg-[#E9EAEA]" />

                <h2 className="  font-bold text-[16px] leading-[16px] tracking-[0.02em]  md:text-fluid-md">
                    PROJECTS
                </h2>

                <div className="flex-1 h-[1px]  bg-[#E9EAEA] 2xl:h-[2px]" />

            </div>

            <ProjectCard/>


        </section>



    )
}