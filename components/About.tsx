"use client";

import { Resume } from "./Resume";
import { Intro } from "./Intro";

export const About = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-white">
      <div className="text-center mb-20 text-7xl font-bold">
        <Intro />
      </div>

      <div className="flex justify-center items-center">
        <Resume />
      </div>

    </div>
  );
};