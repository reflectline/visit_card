import {Sidebar} from "@/widgets/Sidebar/ui/Sidebar.tsx";
import {About} from "@/widgets/About/ui/About.tsx";
import {WorkExperience} from "@/widgets/WorkExperience/ui/WorkExperience.tsx";
import {CoreSkills} from "@/widgets/CoreSkills/ui/CoreSkills.tsx";
import {Projects} from "@/widgets/Projects/ui/Projects.tsx";
import {WhyMe} from "@/widgets/WhyMe/ui/WhyMe.tsx";
import {motion} from "framer-motion";
import {container, fade} from "@/shared/lib/animations.ts";
//  shadow-[0_96px_120px_-1px_rgba(119,119,119,1)]
// shadow-[0_60px_120px_rgba(0,0,0,0.15),0_20px_40px_rgba(0,0,0,0.08)]
export const ResumePage = () => {

    return (
        <div className=" min-h-screen flex justify-center bg-[#C4C4C4] ">

            <div className="
            pt-[clamp(48px,3vw,120px)]
            md:pt-[clamp(44px,2.29vw,88px)]
            w-full max-w-[clamp(900px,43.4vw,1800px)]
            bg-[#F9FAFB]
            grid grid-cols-1 md:grid-cols-[29.67%_1fr]
           shadow-[0_60px_120px_rgba(0,0,0,0.15),0_20px_40px_rgba(0,0,0,0.08)]">



                <aside className={'bg-black '}>
                    <Sidebar/>
                </aside>

                <motion.main
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className=" px-[36px] pt-[55px] md:px-fluid-lg md:pt-0">

                    <motion.div variants={fade}>
                        <About/>
                    </motion.div>
                    <motion.div variants={fade}>
                        <WorkExperience/>
                    </motion.div>
                    <motion.div variants={fade}>
                        <CoreSkills/>
                    </motion.div>
                    <motion.div variants={fade}>
                        <Projects/>
                    </motion.div>
                    <motion.div variants={fade}>
                        <WhyMe/>
                    </motion.div>

                    <div
                        className='flex justify-end text-[10px] text-[#A9A9AA] pt-[32px] md:text-fluid-ms md:pt-fluid-md'>
                        © 2026 All rights reserved
                    </div>
                </motion.main>
            </div>
        </div>)
}





