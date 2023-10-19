import React from "react";
import "./App.css";
import Header from "./shared/Header";
import SearchBar from "./components/SearchBar";
import SearchedNewsContainer from "./components/SearchedNewsContainer";

const App = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <SearchedNewsContainer />
    </div>
  );
};

export default App;
