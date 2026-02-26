import {useEffect, useRef, useState} from "react";
import {assets} from "@/entities/resume/model/assets.ts";
import {sidebarText} from "@/entities/resume/model/resume.data.ts";
import {ContactItem} from "@/widgets/Sidebar/ui/components/ContactItem.tsx";


export const ContactBlock = () => {

    const [isCopied, setIsCopied] = useState<string | null>(null)
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(text);

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = window.setTimeout(() => {
                setIsCopied(null);
            }, 1500);

        } catch (err) {
            console.error("Copy error", err)
        }
    };

    return (
        <>
            <h2 className='pt-[90px] font-bold text-[24px]
            md:pt-[clamp(90px,4.68vw,180px)] md:text-fluid-md'>
                CONTACT
            </h2>
            {/*md:pb-fluid-cont-pb*/}
            <div>
                <ul className=' font-light space-y-3 pt-6 text-[18px] pb-[24px] md:pb-fluid-cont-pt
                         md:tracking-normal md:fluid-space-y-3 md:text-fluid-sm
                         '>

                    <ContactItem
                        icon={assets.phone}
                        info={sidebarText.number}
                        copyable
                        handleCopy={handleCopy}
                        isCopied={isCopied === sidebarText.number}
                    />
                    <ContactItem
                        icon={assets.telegram}
                        info={sidebarText.telegram}
                        link={sidebarText.telegram}
                    />
                    <ContactItem icon={assets.email}
                                 info={sidebarText.mail}
                                 copyable
                                 handleCopy={handleCopy}
                                 isCopied={isCopied === sidebarText.mail}
                    />
                    <ContactItem
                        icon={assets.github}
                        info={sidebarText.github}
                        link={sidebarText.github}
                    />

                </ul>

            </div>
        </>
    )
}
