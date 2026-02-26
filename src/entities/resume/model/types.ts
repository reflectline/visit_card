
export interface WorkItem {
    id: number
    company: string
    period: string
    description: string
}

export interface SkillItem {
    id: number
    title: string
    icon: string
}

export interface ProjectItem {
    id: number
    svg: string
    title: string
    subtitle: string
    description: string
    icons: string
    link: string
}