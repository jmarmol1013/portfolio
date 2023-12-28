import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "next-themes";

type EmailForm = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type sendFormResult = "send" | "error";

export const ContactForm = () => {
  const { theme } = useTheme();
  const [succesFormSend, setSuccessFormSend] = useState<sendFormResult>();

  const sendForm: (formData: FormData) => Promise<void> = async (
    formData: FormData,
  ) => {
    const emailFormInfo: EmailForm = {
      name: formData.get("name")!.toString(),
      email: formData.get("email")!.toString(),
      phone: formData.get("phone")!.toString(),
      subject: formData.get("subject")!.toString(),
      message: formData.get("message")!.toString(),
    };

    emailjs
      .send(
        "service_x7zcccm",
        "template_ffzngiv",
        emailFormInfo,
        "_HHfBXiFy8zLLHhbS",
      )
      .then(
        (result) => {
          if (result.status == 200) {
            setSuccessFormSend("send");
          } else {
            setSuccessFormSend("error");
          }
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="w-full lg:ml-10 lg:w-1/2">
      <form encType="application/x-www-form-urlencoded" className="flex flex-col" action={sendForm} method="POST">
        <label htmlFor="name" className="mt-2 text-lg">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Juan"
          className={`${
            theme == "light" ? "border-gray-300" : "border-gray-500"
          } sappearance-none focus:text-primary focus:outline-title mt-3 block rounded border-2 bg-inherit px-3 py-3 leading-tight md:ml-0 md:w-full`}
          required
        />
        <label htmlFor="email" className="mt-2 text-lg">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="juanca10cantabria@gmail.com"
          className={`${
            theme == "light" ? "border-gray-300" : "border-gray-500"
          } sappearance-none focus:text-primary focus:outline-title mt-3 block rounded border-2 bg-inherit px-3 py-3 leading-tight md:ml-0 md:w-full`}
          required
        />
        <label htmlFor="phone" className="mt-2 text-lg">
          Phone
        </label>
        <input
          type="phone"
          name="phone"
          placeholder="+1 (437) 429-7321"
          className={`${
            theme == "light" ? "border-gray-300" : "border-gray-500"
          } sappearance-none focus:text-primary focus:outline-title mt-3 block rounded border-2 bg-inherit px-3 py-3 leading-tight md:ml-0 md:w-full`}
          required
        />
        <label htmlFor="subject" className="mt-2 text-lg">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          placeholder="Job Opportunity"
          className={`${
            theme == "light" ? "border-gray-300" : "border-gray-500"
          } sappearance-none focus:text-primary focus:outline-title mt-3 block rounded border-2 bg-inherit px-3 py-3 leading-tight md:ml-0 md:w-full`}
          required
        />
        <label htmlFor="message" className="mt-2 text-lg">
          Message
        </label>
        <textarea
          name="message"
          placeholder="Provide details about your skills in..."
          className={`${
            theme == "light" ? "border-gray-300" : "border-gray-500"
          } sappearance-none focus:text-primary focus:outline-title mt-3 block rounded border-2 bg-inherit px-3 py-3 leading-tight md:ml-0 md:w-full`}
          required
        />
        <button
          type="submit"
          className="border-title hover:bg-title m-auto ml-0 mt-4 w-full rounded-lg border-2 px-4 py-2 text-center lg:w-[40%]"
          title="Button to send form"
        >
          Sent
        </button>
      </form>
      <div className="mt-4 text-center">
        {succesFormSend == "send" ? (
          <span className="text-title">
            Thanks for contacting me! Wait for my respond soon.
          </span>
        ) : succesFormSend == "error" ? (
          <span className="text-red-700">Error sending the form</span>
        ) : null}
      </div>
    </div>
  );
};
