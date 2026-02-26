import {assets} from "@/entities/resume/model/assets.ts";

export type ContactProps = {
    icon: string
    info: string
    link?: string
    handleCopy?: (text: string) => void
    copyable?: boolean
    isCopied?: boolean
}
export const ContactItem = (props: ContactProps) => {
    const {icon, info, link, handleCopy, copyable ,isCopied} = props

    return (
        <>
            <li className="flex items-center gap-fluid-gapms group">
                <img src={icon} alt="icon" className="shrink-0 w-[24px] md:w-fluid-cont-imgpt "/>
                {link?
                    (<a href={`https://${link}`} target="_blank"
                        className="cursor-pointer hover:underline pl-[6px] md:pl-fluid-cont-icopt">
                            {info}
                        </a>
                    ):(
                        <span className=' cursor-pointer hover:underline pl-[6px] md:pl-fluid-cont-icopt'
                              onClick={() => copyable && handleCopy?.(info)}
                        >{info}
                    </span>)
                }

                <span className="relative  w-[11px] h-[11px] md:w-fluid-cont-int shrink-0">
                    {copyable && (
                        <>
                            <img src={assets.done} alt="done"
                                 className={`absolute w-full transition-opacity ${isCopied ? "opacity-100" : "opacity-0"}`}
                            />
                            <img src={assets.copy} alt="copy"
                                 className={`absolute w-full transition-opacity ${isCopied ? "opacity-0" : "opacity-0 group-hover:opacity-100"}`}
                            />
                        </>
                    )}
                    {link && (
                        <img src={assets.link} alt="link"
                             className="w-full opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                    )}
                </span>


            </li>

        </>
    )
}

