"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
    return (
    <section className="lg:py-16 mt-16 mb-16 container mx-auto px-12 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >   
                <h1 className='text-white mb-4 text-2xl sm:text-3xl lg:text-7xl lg:leading-normal font-extrabold'>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                        Hello, I'm {""}
                    </span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            "Fernanda",
                            1000,
                            "Front-End Developer",
                            1000,
                            "Full Stack Developer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    I am dedicated to merging my diverse skill set to drive your digital endeavors towards unparalleled success.
                </p>
                <div>
                    <button 
                        className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                        onClick={() => {document.getElementById ('contact').scrollIntoView({behavior:'smooth'})
                    }}>
                        Hire Me
                    </button>
                    <button 
                        className="px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                        <Link 
                            className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2" 
                            href='https://www.linkedin.com/in/fernanda-ramos-fogaca/' target="_blank">
                                LinkedIn
                        </Link>
                    </button>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image 
                    className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    src= "/images/hero-image.png"
                    alt="hero image"
                    width={350}
                    height={350}
                    border-radius="rounded-full"
                    priority
                    />
                </div>
            </motion.div>
        </div>
    </section>
    );
};

export default HeroSection;