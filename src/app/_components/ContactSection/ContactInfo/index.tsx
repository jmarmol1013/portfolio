import { useTheme } from "next-themes";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export const ContactInfo = () => {
  const { theme } = useTheme();
  return (
    <div className="flex w-full flex-col lg:w-1/2">
      <h4 className="text-justify text-2xl">Contact Information</h4>
      <p className="mt-2 text-justify text-lg text-gray-500">
        Connect with me for exciting project collaborations or job opportunities
        in the realm of software engineering and technology. Let&apos;s shape
        the future together!
      </p>
      <div className="my-4 flex w-full items-center py-2">
        <div
          className={`${
            theme === "light" ? "bg-gray-100" : "bg-gray-700"
          } max-w-[20%] rounded-full  p-4 lg:max-w-[17%]`}
        >
          <FaPhoneAlt size={24} />
        </div>
        <div className="flex flex-col pl-6">
          <span className="text-lg">Contact on Phone</span>
          <a href="tel:+14374297321">
            <span className="hover:text-title text-gray-500">
              +1 (437) 429-7321
            </span>
          </a>
        </div>
      </div>
      <div className="my-4 flex w-full items-center py-2">
        <div
          className={`${
            theme === "light" ? "bg-gray-100" : "bg-gray-700"
          } max-w-[20%] rounded-full  p-4 lg:max-w-[17%]`}
        >
          <IoMdMail size={24} />
        </div>
        <div className="flex flex-col pl-6">
          <span className="text-lg">Contact on Mail</span>
          <a href="mailto:juanca10cantabria@gmail.com">
            <span className="hover:text-title text-gray-500">
              juanca10cantabria@gmail.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
