import React from "react";

import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

import blogData from "../data/blog";


const {name, image, about, post} = blogData


function App() {
  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about}/>
      <ArticleList posts={post} />
    </div>
  );
}

export default App;

