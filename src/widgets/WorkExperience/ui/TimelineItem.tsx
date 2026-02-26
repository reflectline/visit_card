import {workExperience} from "@/entities/resume/model/resume.data.ts";
import {assets} from "@/entities/resume/model/assets.ts";
import {motion} from "framer-motion";

export const TimelineItem = () => {

    return (
        <div className=" relative">

            {workExperience.map((job, index) => {
                const isFirst = index === 0
                const isLast = index === workExperience.length - 1
                const offset = !isFirst ? "pt-[24px] md:pt-fluid-cont-pt" : ""

                return (
                    <div key={job.id} className="grid
                    grid-cols-[2.49%_12.47%_1px_minmax(0,1fr)] gap-x-fluid-gapms gap-y-fluid-gapms">

                        {/* Timeline */}
                        <div className="relative h-full ">

                            {/*line*/}
                            <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] 4k:w-[4px] bg-black 
                            ${isFirst ? "top-2  bottom-0" : ""}
                            ${!isFirst && !isLast ? "top-0 bottom-0" : ""}
                            ${isLast ? "h-[26px] md:h-fluid-timeline-sp " : ""}`}/>

                            {/*dot*/}
                            <div className={`absolute inset-x-0 top-0 z-10 flex justify-center 
                                ${!isFirst ? "mt-[26px] md:mt-fluid-timeline-sp" : ""}`}>
                                <div className="relative w-[14px] h-[14px] md:w-fluid-ns md:h-fluid-ns">
                                    <img src={assets.circleBlack} alt="circle" className="w-full h-full block"/>
                                    {!isFirst && <img src={assets.circleWhite} alt="circle" className="absolute inset-0 w-full h-full block"/>}
                                </div>
                            </div>

                        </div>

                        {/* Company */}
                        <div>
                            <p className={`${offset} font-bold md:font-medium text-[14px] leading-[13px] md:text-fluid-sm md:leading-fluid-company`}>
                                {job.company}
                            </p>
                            <p className="text-[10px] md:text-fluid-ms text-[#A9A9AA] ">
                                {job.period}
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full ml-[10px]  md:ml-fluid-ms bg-[#E9EAEA] " />

                        {/* Description */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.5, delay: 0.2}}
                            lang={'ru'}
                            className={`transform-gpu will-change-transform ${offset} ml-[30px] text-[14px] leading-[20px] hyphens-auto 
                            md:text-fluid-us md:leading-fluid-sm md:ml-fluid-timeline-ml`}>
                            <p>{job.description}</p>
                        </motion.div>

                    </div>
                )
            })}
        </div>
    )
}