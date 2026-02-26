
export const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

export const fade = {
    hidden: {
        opacity: 0, y: -4
    },
    visible: {
        opacity: 1, y: 0,
        transition: {
            duration: 0.45,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        },
    },
};