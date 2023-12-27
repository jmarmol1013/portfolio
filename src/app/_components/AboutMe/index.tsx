import Image from "next/image";
import Link from "next/link";
import React from "react";

export const About = () => {
  return (
    <div className="flex flex-col justify-center" id="about">
      <h2 className="text-title text-center text-4xl lg:text-5xl">About Me.</h2>
      <div className="mt-4 flex w-full flex-col items-center px-4 align-middle lg:ml-[15%] lg:w-[70%] lg:flex-row lg:px-0">
        <div className="mr-2">
          <Image
            src={"https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            className=" border-title rounded-lg border-2"
            alt={"Coding in a laptop"}
            width={3500}
            height={1000}
          />
        </div>
        <div className="ml-2 mt-4 text-lg lg:mt-0 lg:max-w-[60%]">
          <p>
            I am a passionate software engineering technology student at
            Centennial College. With a strong enthusiasm for
            coding. I constantly strive to expand my knowledge and skills in the
            field. I am dedicated to creating efficient and innovative
            solutions, leveraging my expertise in various programming languages
            and technologies. My portfolio showcases a diverse range of projects
            that demonstrate my ability to tackle real-world challenges and
            deliver high-quality results.
          </p>
          <Link href="https://drive.google.com/file/d/1uzW_1nCiBCmeA2IOUXkbgbBvysDV6kHJ/view?usp=sharing" target="_blank">
            <div className="border-title mt-4 rounded-lg border-2 px-4 py-2 text-center hover:cursor-pointer hover:bg-title lg:w-[40%]">
              <span>See my resume</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
