import {TimelineItem} from "@/widgets/WorkExperience/ui/TimelineItem.tsx";
import {workExperience} from "@/entities/resume/model/resume.data.ts";
import {motion} from "framer-motion";

export const WorkExperience = () => {
    return (

        <section className="pb-[32px] md:pb-fluid-md text-[#222222]">

            <div className="flex items-center gap-fluid-gapus w-full pb-[13px] md:pb-fluid-wp "> {/*md:pb-fluid-sm*/}
                <motion.div
                    initial={{opacity: 0,}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, ease: 'easeIn', delay: 0.1}}
                    className="flex-1 h-[1px] bg-[#E9EAEA]"/>

                <motion.h2
                    initial={{opacity: 0,}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 0.1}}
                    className="transform-gpu will-change-transform font-bold text-[16px] tracking-[0.02em] md:text-fluid-md">
                    WORK EXPERIENCE
                </motion.h2>

                <motion.div
                    initial={{opacity: 0,}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, ease: 'easeIn', delay: 0.1}}
                    className="flex-1 h-[1px] bg-[#E9EAEA] "/>
            </div>

            <div className='block md:hidden'>
                {workExperience.map(job => (
                    <div key={job.id}>
                    <span className=" font-medium text-[14px]">
                        {job.company} {job.period}
                    </span>
                        <p lang={'ru'} className="text-[14px] hyphens-auto pt-[2px] pb-[18px]">
                            {job.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className='hidden md:block '>
                <TimelineItem/>
            </div>

        </section>
    )
}