import React, { useState, useEffect } from "react";
import NewestBanner from "./Newest/NewestBanner";
import News from "./NewsCard";

const NewsList = ({ newsList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // console.log(newsList);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col text-gray-800">
        <h1 className="font-bold text-center text-4xl md:text-6xl">
          Welcome to Tesla News
        </h1>
        <p className="text-justify text-md md:text-md mx-auto my-7 md:w-1/2">
          Sharing the Latest Tesla News with the World. This is a place where
          you can find the latest news about Tesla, Tesla's products, Tesla's
          events and Tesla's people. This is made possible with the help of
          Nextjs and TailwindCSS.
        </p>
      </div>
      <NewestBanner
        key={newsList.articles[0].url}
        title={newsList.articles[0].title}
        image={newsList.articles[0].urlToImage}
        date={newsList.articles[0].publishedAt}
        author={newsList.articles[0].author}
        description={newsList.articles[0].description}
        link={newsList.articles[0].url}
      />
      <div className="mx-auto w-3/4 lg:w-1/2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`Search Tesla News`}
          className="px-3 py-2 sticky top-0 placeholder-gray-400 text-blueGray-600 bg-white rounded-sm text-sm outline-none focus:outline-none focus:ring-2 ring-1 ring-blue-400 focus:ring-helloblue-400 w-full"
        />
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 place-content-center md:mx-auto">
        {newsList.articles
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
            <News
              key={post.url}
              title={post.title}
              image={post.urlToImage}
              date={post.publishedAt}
              author={post.author}
              description={post.description}
              link={post.url}
            />
          ))}
      </div>
    </div>
  );
};

export default NewsList;
