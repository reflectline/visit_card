import {sidebarText} from "@/entities/resume/model/resume.data.ts";

export const EducationBlock = () => {

    return (
        <>
            <h2 className=' pt-[60px] font-bold text-[24px]
            md:pt-fluid-education md:text-fluid-md
                    '>
                EDUCATION
            </h2>
            <div className='font-light pt-[18px] md:pt-[clamp(18px, 0.93vw, 36px)]  text-[18px] tracking-[.02em]
            md:text-fluid-sm md:tracking-normal
                    '>
                {sidebarText.education.map((line) => (
                    <p key={line.id} className={(line.id !== 1)&&(line.id % 2 === 1) ? 'pt-[9px] md:fluid-cont-pt' : ''}>
                        {line.text}
                    </p>
                ))}
            </div>
        </>

    )
}
