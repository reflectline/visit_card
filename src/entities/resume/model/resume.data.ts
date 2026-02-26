import type {WorkItem, SkillItem, ProjectItem} from "./types";
import {assets, smallSvg} from "@/entities/resume/model/assets.ts";


export const sidebarText = {
    name: 'Kirill Shcherbakov',
    profile: 'Frontend Developer',
    education: [
        {id: 1, text:'2023 Dagestan State Technical'},
        {id: 2, text:'University. Master’s degree'},
        {id: 3, text:'2025 IT-Incubator Frontend'},
        {id: 4, text:'Development Program'}
    ],

    number:'+7 (988) 698-35-79',
    telegram: 't.me/reflectline',
    mail: 'reflectline.dev@gmail.com',
    github: 'github.com/reflectline'

}


export const aboutText: string =
    `Frontend developer с техническим бэкграундом и магистратурой в сфере инженерии. 
    Фокусируюсь на React-приложениях, архитектуре и чистой структуре кода. Имею коммерческий
    опыт работы над веб-проектами и уверенно работаю с современным стеком: 
    React, TypeScript, RTK Query. Быстро обучаюсь, системно подхожу к разработке, 
    стремлюсь расти в сторону full-stack.`

export const workExperience: WorkItem[] = [
    {
        id: 1,
        company: "Space AI",
        period: "(2024–2025)",
        description:
            `Разработка проекта (Маркетплейс сервисов c искусственным интеллектом). 
            Создание пользовательских React-хуков и переиспользуемых компонентов UI, 
            Разработка архитектуры проекта с разделением на слои: UI, BLL. Обработка 
            и валидация форм с использованием react-hook-form, Zod. Реализация приватных 
            маршрутов и перенаправлений. Взаимодействие с сервером через Ajax-запросы (Axios), 
            поддержка операций CRUD. Рефакторинг, контроль дублирования кода, устранение ошибок, 
            соблюдение принципов чистой архитектуры.`
    },
    {
        id: 2,
        company: "Freelance Frontend",
        period: "(2025)",
        description:
            `Дорабатывал небольшие SPA-приложения. Реализовывал обработку
            ошибок при работе с API (try/catch, обработка HTTP-статусов, пользовательские 
            уведомления, логирование ошибок). Настраивал формы с валидацией, улучшал UX при загрузке данных (loader, 
            empty state).`
    },
]

export const coreSkills: SkillItem[] = [
    {id: 1, title: "JavaScript", icon: "JS"},
    {id: 2, title: "React", icon: "React"},
    {id: 3, title: "Redux", icon: "Redux"},
    {id: 4, title: "Git", icon: "Git"},
    {id: 5, title: "TypeScript", icon: "TS"},
]

export const projects: ProjectItem[] = [
    {
        id: 1,
        svg: assets.selecta,
        title: "Selecta",
        subtitle: "Extension",
        description: "Chrome расширение с контекстным меню",
        icons: smallSvg.selectaIco,
        link:'https://github.com/reflectline/selecta'
    },
    {
        id: 2,
        svg: assets.todo,
        title: "ToDo",
        subtitle: "Todolist",
        description: "SPA-приложение с CRUD-логикой и фильтрацией задач",
        icons: smallSvg.todoIco,
        link:'https://github.com/reflectline/todolist'
    },
    {
        id: 3,
        svg: assets.web,
        title: "Web",
        subtitle: "Vanilla JS site",
        description: "Мини веб проект на чистом JavaScript",
        icons: smallSvg.webIco,
        link:'https://github.com/reflectline/meal_website'
    },



]

export const whyMe: string[] = [
    "• Пишу чистый и поддерживаемый код",
    "• Проектирую масштабируемую архитектуру",
    "• Уделяю внимание пользовательскому опыту",
    "• Быстро осваиваю новые технологии, развиваюсь в сторону full-stack"
]


