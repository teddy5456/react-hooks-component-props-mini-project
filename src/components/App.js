import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <div>
      <Header blogName={blogData.name} />
      <About blogImage={blogData.image} aboutText={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;