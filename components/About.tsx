"use client";

import { useEffect, useState } from "react";
import { Resume } from "./Resume";

export const About = () => {
    const words = [" Aditya Sethi", " a Fullstack Developer!", " a Backend Developer!", " a Frontend Developer!", " a Software Engineer!"];

    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prevWord) => {
                const currIndex = words.indexOf(prevWord);
                const nextIndex = (currIndex + 1) % words.length;
                return words[nextIndex];
            })
        }, 2000);

        return () => clearInterval(interval);
    });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white">
      <div className="text-center mb-8 text-7xl font-bold">
        Hi there, I am 
        <span className="text-blue-300">{currentWord}</span>
      </div>
      <br />

      <div className="flex justify-center items-center">
        <Resume />
      </div>
    </div>
  );
};
