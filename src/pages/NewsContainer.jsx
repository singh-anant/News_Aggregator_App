import React from "react";
import Header from "../shared/Header";
import SearchedNewsContainer from "../components/SearchedNewsContainer";
import SearchBar from "../components/SearchBar";
const NewsContainer = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <SearchedNewsContainer />
    </div>
  );
};

export default NewsContainer;
