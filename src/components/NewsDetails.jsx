import React from "react";
import Comments from "./Comments";

const NewsDetails = ({ title, author, points, commentsObj, date }) => {
  return (
    <div className="m-3 p-5">
      <div className="flex-col   justify-center">
        <h1 className="font-serif font-bold text-4xl">{title}.</h1>
        <div className="flex text-3xl justify-between mt-4">
          <p>
            <span className="text font-bold">Author-</span>
            {author}
          </p>
          <p>
            <span className="font-bold">Published At-</span>
            {date.substring(0, date.indexOf("T"))}
          </p>
          <p>
            <span className="font-bold">Points-</span>
            {points}
          </p>
        </div>
        <h2 className="mt-3 text-3xl font-serif font-bold">Comments-</h2>
        <Comments commentsObj={commentsObj} />
      </div>
    </div>
  );
};

export default NewsDetails;
