import React from "react";

export const PaperStack: React.FC = () => {
    // 1
    const layers = [
        { rotate: -4.2, y: -8, x: -6 },
        { rotate: -3.1, y: -6, x: 4 },
        { rotate: -2.4, y: -4, x: -3 },
        { rotate: -1.2, y: -2, x: 2 },
        { rotate: -0.6, y: -1, x: -1 },
        { rotate: 0.8, y: -2, x: 2 },
        { rotate: 1.6, y: 2, x: -2 },
        { rotate: 2.5, y: 4, x: 3 }, //  { rotate: 2.4, y: 4, x: 3 } { rotate: 3.2, y: 4, x: 3 },
        { rotate: 3.1, y: 6, x: -4 },

        { rotate: 2.2, y:8, x: 1 },
        { rotate: 1.2, y:8, x: 1 },
    ];



    // 1
    // const layers = [
    //     { rotate: -4.2, y: -8, x: -6 },
    //     { rotate: -3.1, y: -6, x: 4 },
    //     { rotate: -2.4, y: -4, x: -3 },
    //     { rotate: -1.2, y: -2, x: 2 },
    //     { rotate: -0.6, y: -1, x: -1 },
    //     { rotate: 0.8, y: 1, x: 2 },
    //     { rotate: 1.6, y: 2, x: -2 },
    //     { rotate: 2.4, y: 4, x: 3 },
    //     { rotate: 3.2, y: 6, x: -4 },
    // ];

    // 2
    // const layers = [
    //     { rotate: -4.2, y: -8, x: -6 },
    //     { rotate: -3.1, y: -6, x: 4 },
    //     { rotate: -2.4, y: -4, x: -3 },
    //     { rotate: -1.2, y: -2, x: 2 },
    //     { rotate: -0.6, y: -1, x: -1 },
    //     { rotate: 0.8, y: 1, x: 2 },
    //     { rotate: 1.6, y: 2, x: -2 },
    //     { rotate: 2.4, y: 4, x: 3 },
    //     { rotate: 3.2, y: 6, x: -4 },
    //
    //
    //     { rotate: 2.5, y:-16, x: 4 },
    // ];




    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ">
            <div className="relative w-[clamp(900px,43.4vw,1800px)] h-full">
                {layers.map((layer, index) => (
                    <div key={index}
                         className="absolute inset-0 bg-[#F9FAFB] rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)] ring-1 ring-black/2"
                         style={{
                            transform: `translate(${layer.x}px, ${layer.y}px) rotate(${layer.rotate}deg)`,
                            zIndex: index,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};