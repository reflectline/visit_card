
import {Meteors} from "@/shared/ui/BackgroundEffects/Meteors"
import {MeteorsTopFade} from "@/shared/ui/BackgroundEffects/MeteorsTopFade.tsx";
import {SidebarHeader} from "@/widgets/Sidebar/ui/SidebarHeader.tsx";
import {ProfileBlock} from "@/widgets/Sidebar/ui/blocks/ProfileBlock.tsx";
import {EducationBlock} from "@/widgets/Sidebar/ui/blocks/EducationBlock.tsx";
import {ContactBlock} from "@/widgets/Sidebar/ui/blocks/ContactBlock.tsx";


export const Sidebar = () => {
    return (
        <>
            <SidebarHeader/>
            <div className="relative bg-black overflow-hidden ">
                <div className="absolute inset-0 z-0"><Meteors/></div>
                <div className="absolute inset-0 z-10 pointer-events-none"><MeteorsTopFade/></div>

                <div className="text-white relative z-20 py-6 px-9
                 md:py-[clamp(24px,2.22vh,48px)]
                 md:px-[clamp(32px,1.66vw,64px)]

                 ">

                    <ProfileBlock />
                    <EducationBlock />
                    <ContactBlock />
                </div>

            </div>
        </>
    )
}


