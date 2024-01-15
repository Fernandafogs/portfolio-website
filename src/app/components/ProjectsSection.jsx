"use client";
import React, {useState} from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';

const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A React portfolio website that displays my projects and skills.<br/> Technologies used: Javascript, React JS, Next.js and Tailwind CSS.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl:"/",
    },
    {
        id: 2,
        title: "Recipe App",
        description: "A full-stack recipe app project that utilizes data from an external API to fetch recipe details. In this app, you can search for recipes by name, favorite recipes, and view their details. Developed front and backend api webhook.<br/> Technologies used: Typescript, React JS, Node.js & Express.js, PostgreSQL Database, JWT Authentication and RESTful API Design.",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl:"/",
    },
    {
        id: 3,
        title: "Weather App",
        description: "A weather app project that utilizes data from an external API to fetch weather details. In this app, you can search for weather by city name and view the temperature, weather condition, humidity and wind speed.<br/> Technologies used: Javascript, React JS and API from OpenWeatherMap.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Fernandafogs/weather-app",
        previewUrl:"https://fernanda-fogaca-weather-app.netlify.app/",
    },
    {
        id: 4,
        title: "Project 4",
        description: "Project 4 description",
        image: "/images/projects/4.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "/",
        previewUrl:"/",
    },
    {
        id: 5,
        title: "Project 5",
        description: "Project 5 description",
        image: "/images/projects/4.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "/",
        previewUrl:"/",
    },
    {
        id: 6,
        title: "Project 6",
        description: "Project 6 description",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl:"/",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );


    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag === "All"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag === "Web"}
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Mobile" 
                    isSelected={tag === "Mobile"}
                />
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => (
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection