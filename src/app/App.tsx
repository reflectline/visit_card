import Lenis from "@studio-freight/lenis";
import {ResumePage} from "@/pages/resume-page/ResumePage.tsx";
import {useEffect} from "react";
import {PaperStack} from "@/shared/ui/BackgroundEffects/PaperStack.tsx";



function App() {

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.12,
        })

        let frameId: number
        const raf = (time: number) => {
            lenis.raf(time)
            frameId = requestAnimationFrame(raf)
        }

        frameId = requestAnimationFrame(raf)
        return () => {
            cancelAnimationFrame(frameId)
            lenis.destroy()
        }
    }, [])



    return (
        <div className="relative min-h-screen flex justify-center bg-[#C4C4C4]">
            <PaperStack />

            <div className="relative z-20">
                <ResumePage />
            </div>
        </div>
    )


}

export default App
