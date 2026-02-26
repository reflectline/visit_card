import {assets} from "@/entities/resume/model/assets.ts";



export const CoreSkills = () => {

    return (
        <section className="pb-[26px] md:pb-fluid-timeline-sp text-[#222222]">

            <div className="flex items-center gap-fluid-gapus w-full  md:pb-fluid-sm  ">
                <div className="flex-1 h-[1px] bg-[#E9EAEA]" />

                <h2 className=" transform-gpu will-change-transform font-bold text-[16px] leading-[16px] tracking-[0.02em] md:text-fluid-md">
                    CORE SKILLS
                </h2>

                <div className="flex-1 h-[1px]  bg-[#E9EAEA] 2xl:h-[2px]" />

            </div>



            <div className="block sm:hidden">
                <div className="px-[32px]">
                    <div className="flex flex-wrap mt-[8px] ">
                        {assets.skills.map((skill, index) => (
                            <div key={index} className={`w-1/3 flex pt-6 justify-center  ${index === 3 ? "ml-[16.666%] pt-6" : ""}`}>
                                <img src={skill} alt="" className="w-[55%]" />
                            </div>
                        ))}

                    </div>
                </div>
            </div>


            <div className='hidden sm:block '>
                <div className='px-[18px] md:px-[clamp(18px,0.93vw,36px)]  '>
                    <div className="md:grid md:grid-cols-5 md:gap-fluid-gapns  md:justify-items-center mt-[2px] ">

                        {assets.skills.map((skill, index) => (
                            <img className=' md:w-[64%] ' key={index} src={skill} alt=""/>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    )
}