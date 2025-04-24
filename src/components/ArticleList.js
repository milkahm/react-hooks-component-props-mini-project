import React from "react";
import Article from "./Article";

const ArticleList = ({ posts }) => {
  console.log(posts);

  let articleContent = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });

  return <main>{articleContent}</main>;
};

export default ArticleList;