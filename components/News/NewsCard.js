import React from "react";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import Moment from "react-moment";
import "moment/locale/en-ca";

Moment.globalLocale = "en";
const Blog = ({ image, title, description, link, date, author }) => {
  const dateToFormat = date;

  return (
    <div className="flex flex-col justify-between mx-2 md:mx-auto my-8 md:w-5/6">
      <img src={image} alt={title} className="bg-cover rounded-lg" />
      <p className="text-xs text-gray-600 text-left">
        {" "}
        <Moment format="MMMM DD, YYYY" className="capitalize font-semibold">
          {dateToFormat}
        </Moment>
      </p>
      <a href={link} target="__blank">
        <h1 className="text-xl md:text-2xl font-bold hover:text-blue-900">
          {" "}
          {title}{" "}
        </h1>
      </a>
      <div className="flex flex-col">
        <p className="text-sm"> {description.substring(0, 100)}... </p>

        <a
          href={link}
          target="__blank"
          className="flex flex-row justify-end text-right -mt-1 hover:underline"
        >
          <p className="my-auto font-semibold">Open</p>
          <BsArrowRightShort className="text-xl my-auto" />
        </a>
      </div>
    </div>
  );
};

export default Blog;
