import React, { useState } from "react";

const Footer = () => {
  return (
    <div className="divide-y divide-white text-white bg-gray-800 py-2 px-2 w-full">
      <div className="flex flex-row mx-auto justify-items-center justify-center ">
        <p className="my-auto">Developed by </p>{" "}
        <a
          href="https://www.youtube.com/channel/UCAYruOydWaqSRnJqKPzR4Ag/featured"
          target="__blank"
          className="hover:text-yellow-500 font-bold my-auto mx-2"
        >
          CodeWithKenn
        </a>
      </div>
    </div>
  );
};

export default Footer;
