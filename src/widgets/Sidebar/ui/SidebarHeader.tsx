import {assets} from "@/entities/resume/model/assets.ts";

export const SidebarHeader = () => {

    return (
        <div className="relative flex flex-col items-center ">
            <div className="absolute w-[50%]">
                <img src={assets.logo} alt="logo" className="w-full"/>
            </div>
            <img src={assets.photo} alt="photo" className="w-full h-auto "/>
        </div>
    )
}