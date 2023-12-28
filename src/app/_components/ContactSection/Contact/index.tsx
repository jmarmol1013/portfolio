import React, { useState } from "react";
import { ContactInfo } from "../ContactInfo";
import { ContactForm } from "../ContactForm";

export const Contact = () => {
  return (
    <div className="mt-10 flex flex-col justify-center" id="contact">
      <h2 className="text-title text-center text-4xl lg:text-5xl">Contact.</h2>
      <div className="justify-center">
        <div className="mx-[10%] mt-5 flex w-[80%] flex-col items-center justify-center lg:mx-[15%] lg:w-[70%] lg:flex-row">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
