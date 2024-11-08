"use client";

import { Cards } from "./Cards";

export const About = () => {
    return (
        <div id="about" className="min-h-screen flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 sm:px-12">
                <div className="text-center text-white text-md sm:text-lg lg:text-xl font-semibold leading-relaxed max-w-4xl mt-20">
                    As a software developer, I bring strong skills in TypeScript and JavaScript and expertise in frameworkds like NextJS, ReactJS and Node.js. My experience spans libraries and tools such as Recoil, Prisma, and TailwindCSS, along with database management using MongoDB and PostgreSQL. I am passionate about transforming ideas into functional, impactful solutions — let’s build something exceptional together!
                    <div className="mt-10">
                        <Cards />
                    </div>
                </div>
                <div className="flex justify-center items-center w-full text-white mt-20">
                    <img src="/me.jpg" alt="Hi 👋! Here's a photo of me" className="w-96 h-96 rounded-full object-cover shadow-lg"/>
                </div>
            </div>
        </div>
    );
}