// Here news will get displayed after search
import React from "react";
import { useSelector } from "react-redux";
import NewsCards from "./NewsCards";

const SearchedNewsContainer = () => {
  const newsObject = useSelector((store) => store.news.newsObject);
  // Early return
  if (!newsObject) return null;
  return (
    <div className="flex flex-wrap justify-center">
      {newsObject.map((news) => (
        <NewsCards
          key={news?.objectID}
          objectID={news?.objectID}
          title={news?.title}
          author={news?.author}
          url={news?.url}
          date={news?.created_at}
        />
      ))}
      {/* <NewsCards
        title={newsObject[0]?.title}
        author={newsObject[0]?.author}
        url={newsObject[0]?.url}
        date={newsObject[0]?.created_at}
      /> */}
    </div>
  );
};

export default SearchedNewsContainer;
