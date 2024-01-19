"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Javascript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Postman</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>
                    Full Stack Javascript Formation
                    <br />
                    Full Stack Javascript Formation
                </li>
                <br />
                <li>
                    Advanced HTML
                    <br />
                    Bradesco Foundation
                </li>
                <br />
                <li>
                    Innovating with CSS
                    <br />
                    Bradesco Foundation
                </li>
                <br />
                <li>
                    Practical HTML and CSS
                    <br />
                    Bradesco Foundation
                </li>
                <br />
                <li>
                    Programming Logic Fundamentals
                    <br />
                    Bradesco Foundation
                </li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>
                    Postgraduate Degree, Marketing Administration
                    <br />
                    FAAP - Armando Alvares Penteado Foundation, São Paulo/Brasil
                </li>
                <br />
                <li>
                    Specialization, Direct Marketing
                    <br />    
                    FAAP - Armando Alvares Penteado Foundation, São Paulo/Brasil
                </li>
                <br />
                <li>
                    Bachelor&apos;s Degree, Social Communications
                    <br />    
                    Anhembi Morumbi University, São Paulo/Brasil
                </li>
            </ul>
        )
    },
   
    
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

  return (
    <section id='about' className='text-white container mt-24 mx-auto px-12 py-4'style={{ paddingTop: '10px' }}>
        <div className='mt-8 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={600} height={600} alt="about"className='rounded-lg' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a full stack web developer aiming to work with web applications that have usefull and responsive functionalities.
                    I have experience working with Javascript, React, Next.js, Redux, Node.js, Express, PostqreSQL, MongoDB, Typescript, HTML, CSS, Tailwind CSS, Postman and Git. Besides I have experience in web integrations in both front and backend, connecting and developing API web hooks.
                    I also have past experience working with CRM and communication projects management.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active={tab === "skills"}
                    >
                        {""}
                        Skills{""}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("certifications")} 
                        active={tab === "certifications"}
                    >
                        {""}
                        Certifications{""}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                    >
                        {""}
                        Education{""}
                    </TabButton>
                   
                </div>
                <div className='mt-4'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;