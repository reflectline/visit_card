import {aboutText} from "@/entities/resume/model/resume.data.ts";
import {motion} from "framer-motion";

export const About = () => {
    return (
        <section className="pb-[32px] md:pb-fluid-md text-[#222222]">
            <motion.h2
                initial={{opacity: 0,}}
                animate={{opacity: 1}}
                transition={{duration: 1}}

                className=' transform-gpu will-change-transform pb-[16px] font-bold text-[16px] tracking-[0.02em]
            md:pb-fluid-us md:text-fluid-md md:tracking-fluid-sm'>
                ABOUT ME
            </motion.h2>

            <motion.p
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, delay: 0.2}}

                lang={'ru'}
                className=' transform-gpu will-change-transform text-[14px] leading-[20px] hyphens-auto
            md:text-fluid-sm md:leading-fluid-sm'>
                {aboutText}
            </motion.p>
        </section>)
}