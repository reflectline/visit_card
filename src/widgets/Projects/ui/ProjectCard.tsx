import {projects} from "@/entities/resume/model/resume.data.ts";

export const ProjectCard = () => {

    return (
        <div className=' px-[16px] md:px-fluid-lg '>
            <div className="grid grid-cols-2 gap-4  md:grid-cols-[28.62%_28.62%_28.62%] md:gap-fluid-gapsm justify-center  ">

                {projects.map((skill, index) => {
                    const isLast = index === projects.length - 1
                    const isOdd = projects.length % 2 !== 0

                   return (
                       <div key={skill.id} className={`relative flex flex-col justify-between
                       h-[170px] px-[14px] pt-[14px] pb-[11px] rounded-[12px]
                       md:col-span-1 md:h-[clamp(170px,8.85vw,340px)] md:px-fluid-ns md:pt-fluid-ns md:pb-cont-int md:rounded-[clamp(12px,0.62vw,24px)]
                       bg-white shadow-[0_4px_18.3px_rgba(0,0,0,0.25)]
                      

                       ${isLast && isOdd ? "col-span-2 "  : ""}
                       transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]
                       hover:-translate-y-2
                       hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]`}>


                        <a href={skill.link} target="_blank">

                            <div className='flex flex-row pl-[1px] '>
                                <img src={skill.svg}  alt="selecta" className='w-[23px] md:w-[clamp(23px,1.19vw,46px)] h-auto pt-[1px]'/>
                                <p className='font-medium text-[18px] pl-[9px] pt-[2px]
                                md:text-[clamp(14px,0.72vw,24px)] md:pl-[clamp(9px,0.46vw,18px)] md:pt-[clamp(2px,0.1vw,4px)]'>
                                    {skill.title}
                                </p>
                            </div>

                            <div className='pt-[9px] md:pt-[clamp(9px,0.46vw,18px)]'>
                                <p className='text-[13px] md:text-fluid-sm font-semibold'>{skill.subtitle}</p>
                                <p lang={'ru'} className='text-[12px] leading-[16px] hyphens-auto
                                md:text-fluid-us md:leading-[clamp(16px,0.83vw,32px)]'>
                                    {skill.description}
                                </p>
                            </div>

                            <div className='absolute pb-[9px] bottom-0 md:pb-[clamp(9px,0.46vw,18px)]'>
                                <img src={skill.icons} alt="icons"
                                     className='  w-[96px] h-auto
                                     md:w-[clamp(96px,5vw,192px)]' />
                            </div>

                        </a>

                    </div>
                   )
                })}
            </div>
        </div>

    )
}