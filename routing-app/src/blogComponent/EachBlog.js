import React, { useContext } from "react";
import { BlogContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";

function EachBlog() {
  const { blogs } = useContext(BlogContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const item = blogs.find((b) => b.id === Number(id));
  return (
    <div className="eachitem">
      <div>{item?.id}</div>
      <div>title:{item?.title}</div>
      <div>Post:{item?.post}</div>
      <button onClick={() => navigate("/blogs")}>back</button>
      <button onClick={() => navigate("/")}>Home🏠</button>
    </div>
  );
}

export default EachBlog;
