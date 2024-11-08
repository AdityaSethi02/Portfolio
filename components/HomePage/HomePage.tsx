"use client";

import { Resume } from "./Resume";
import { Intro } from "./Intro";
import { Follow } from "./Follow";

export const HomePage = () => {
  return (
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
  );
};