import Head from "next/head";
import { useState, useEffect } from "react";
import NewsList from "../components/News/NewsList";

const NEWS_API_KEY = process.env.NEWS_API_KEY;

export default function Home({ newsList }) {
  // console.log(newsList);

  return (
    <div>
      <Head>
        <title>Tesla News App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NewsList newsList={newsList} />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const newsList = await fetch(`
https://newsapi.org/v2/everything?q=tesla&from=2021-11-02&sortBy=publishedAt&sources?country=us&language=en&apiKey=${NEWS_API_KEY}`).then(
      (res) => res.json()
    );
    //     const newsList = await fetch(`
    // https://newsapi.org/v2/everything?q=tesla&from=2021-11-02&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`).then(
    //       (res) => res.json()
    //     );
    // console.log(newsList);
    return {
      props: {
        newsList,
      },
    };
  } catch (error) {
    console.error(error.message);
  }

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      NewsList: [],
    },
  };
}

// export async function getServerSideProps() {
//   try {
//     const newsList = await fetch(`
// https://newsapi.org/v2/everything?q=tesla&from=2021-11-02&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`).then(
//       (res) => res.json()
//     );
//     return {
//       props: {
//         newsList,
//       },
//     };
//   } catch (error) {
//     console.error(error.message);
//   }

//   return {
//     props: {
//       NewsList: [],
//     },
//   };
// }
