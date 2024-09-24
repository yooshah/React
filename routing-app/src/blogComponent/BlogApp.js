import React, { useContext } from "react";
import CreateBlog from "./CreateBlog";
import { BlogContext } from "../App";

function BlogApp() {
  const { blogs, setBlogs } = useContext(BlogContext);

  function AddBlog(title, body) {
    const keyid = blogs.length + 1;
    const blogitem = { title: title, post: body, id: keyid };
    setBlogs([...blogs, blogitem]);
  }
  console.log(blogs);
  return (
    <div>
      <CreateBlog blog={blogs} AddBlog={AddBlog} />
    </div>
  );
}

export default BlogApp;
