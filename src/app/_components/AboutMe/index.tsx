import Image from "next/image";
import Link from "next/link";
import React from "react";

export const About = () => {
  return (
    <div className="flex flex-col justify-center" id="about">
      <h2 className="text-center text-4xl text-title lg:text-5xl">About Me.</h2>
      <div className="mt-4 flex w-full flex-col items-center px-4 align-middle lg:ml-[15%] lg:w-[70%] lg:flex-row lg:px-0">
        <div className="mr-2">
          <Image
            src={
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className=" rounded-lg border-2 border-title"
            alt={"Coding in a laptop"}
            width={3500}
            height={1000}
          />
        </div>
        <div className="ml-2 mt-4 text-lg lg:mt-0 lg:max-w-[60%]">
          <p>
            I am a recent graduate in Software Engineering Technology from
            Centennial College, with over 1.5 years of experience in full-stack
            development. I specialize in building scalable, high-performance
            applications using modern frameworks like Next.js, React, Spring
            Boot, and ASP.NET. My portfolio highlights innovative projects,
            including AI-driven solutions, meal suggestion system, personalized
            stock management tools, and virtual clinic chatbots, showcasing my
            ability to tackle complex real-world challenges. Proficient in
            TypeScript, Python, Java, C#, and SQL, I am passionate about
            creating impactful, user-centric software while continuously
            advancing my technical expertise.
          </p>
          <Link
            href="https://drive.google.com/file/d/1uzW_1nCiBCmeA2IOUXkbgbBvysDV6kHJ/view?usp=sharing"
            target="_blank"
          >
            <div className="mt-4 rounded-lg border-2 border-title px-4 py-2 text-center hover:cursor-pointer hover:bg-title lg:w-[40%]">
              <span>See my resume</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
