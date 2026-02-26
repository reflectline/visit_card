import {sidebarText} from "@/entities/resume/model/resume.data.ts";

export const ProfileBlock = () => {

    return (
        <>
            <h1 className=' font-bold text-[34px] leading-[54px]
                    md:text-fluid-h1
                    md:leading-fluid-h1'>
                {sidebarText.name}
            </h1>
            <p className=' font-light text-[23px] leading-[16px] tracking-[.02em]
                    md:text-fluid-sm
                  '>
                {sidebarText.profile}
            </p>

        </>
    )
}