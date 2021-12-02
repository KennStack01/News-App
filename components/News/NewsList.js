import React, { useState, useEffect } from "react";
import News from "./NewsCard";

const NEWS_API_KEY = process.env.NEWS_API_KEY;

const NewsList = ({ newsList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log(newsList);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="mx-auto w-3/4 lg:w-1/2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`Search News`}
          className="px-3 py-2 sticky top-0 placeholder-gray-400 text-blueGray-600 bg-white rounded-sm text-sm outline-none focus:outline-none focus:ring-2 ring-1 ring-gray-400 focus:ring-helloblue-400 w-full"
        />
      </div>
      {/* <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 place-content-center md:mx-auto">
        {newsList
          .filter((post) => {
            if (searchTerm === "") {
              return post;
            } else if (
              post.title
                .toLowerCase()
                .includes(searchTerm.toString().toLowerCase().trim())
              // ||
              // post.author
              //   .toLowerCase()
              //   .includes(searchTerm.toString().toLowerCase().trim())
            ) {
              return post;
            }
          })
          .map((post) => (
            <p>Test</p>
            // <News
            //   key={post.slug}
            //   title={post.title}
            //   image={post.blogCoverImage.url}
            //   date={post.date}
            //   author={post.author}
            //   description={post.shortDescription}
            //   slug={post.slug}
            // />
          ))}
      </div> */}
    </div>
  );
};

export default NewsList;
