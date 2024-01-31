import React from "react";
import blogData from "../data/blog";

const ArticleList = () => {
    const articleLists = blogData.posts.map((post) => (
        <article 
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
        />
    ));
    return <main>{articleLists}</main>;
};
export default ArticleList;