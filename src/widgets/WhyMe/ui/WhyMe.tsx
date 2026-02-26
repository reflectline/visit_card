import {whyMe} from "@/entities/resume/model/resume.data.ts";

export const WhyMe = () => {

    return (

        <section className="pb-[32px] md:pb-fluid-md text-[#222222]">

            <div className="flex items-center gap-fluid-gapus  w-full pb-[13px]   md:pb-fluid-wp ">   {/*md:pb-fluid-sm*/}

                <h2 className="  font-bold text-[16px] tracking-[0.02em]  md:text-fluid-md">
                    WHY WORK WITH ME
                </h2>

                <div className="flex-1 h-[1px]  bg-[#E9EAEA] " />

            </div>



            <ul>
                {whyMe.map((item, index) => (
                    <li key={index} className=' text-[14px] tracking-[0.02em] leading-[20px]  hyphens-auto
                    md:text-fluid-sm'
                    >{item}</li>

                ))}
            </ul>


        </section>

    )
}