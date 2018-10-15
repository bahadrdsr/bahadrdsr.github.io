import React from "react";
import Tags from "./Tags";

const Post = (props) => {
  const post = props.post;
  return (
    <div className="post">
      <div className="post__content-box">
        <h1 className="post__title">{post.title}</h1>
        <h4 className="post__date">{post.date}</h4>
        <p className="post__body">{post.body.substring(0, 200)}...</p>
      </div>
      <div className="post__tags-box">
        <span className="post__tags-box__label">TAGS</span>
        <Tags tags={post.tags}/>
      </div>
      <a className="post__read-more" href="">Read More</a>
    </div>
  );
}
export default Post;
