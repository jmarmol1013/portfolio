import React from "react";
import { SocialNetworks } from "../SocialNetworks";

export const Banner = () => {
  return (
    <div className="flex w-full flex-col px-8 pt-10 lg:w-[80%] lg:pt-20">
      <h1 className="text-4xl leading-snug lg:text-7xl">
        Hello &#128075; <br></br> I&apos;m <span className="text-title">Juan Marmolejo</span> - Passionate and
        creative Software Developer based in Toronto, Canada.
      </h1>
      <div className="mt-8">
        <SocialNetworks />
      </div>
    </div>
  );
};
