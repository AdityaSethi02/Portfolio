"use client";

import { Follow } from "./HomePage/Follow";
import { Intro } from "./HomePage/Intro";
import { Resume } from "./HomePage/Resume";

export const About = () => {
    return (
        <div id="about">
            <div className="flex flex-col justify-center items-center text-white mt-40">
                <div className="text-center mb-20 text-7xl font-bold">
                    <Intro />
                </div>
                <div className="flex justify-center items-center mb-20">
                    <Resume />
                </div>
                <div className="flex justify-center items-center">
                    <Follow />
                </div>
            </div>
        </div>
    );
}