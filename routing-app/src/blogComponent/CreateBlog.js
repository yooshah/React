import { useState, useContext } from "react";
import { BlogContext } from "../App";
import { useNavigate } from "react-router-dom";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [blogBody, setBlogBody] = useState("");
  const { blogs, setBlogs } = useContext(BlogContext);
  const navigate = useNavigate();

  function AddBlog(title, body) {
    const keyid = blogs.length + 1;
    const blogitem = { title: title, post: body, id: keyid };
    setBlogs([...blogs, blogitem]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    AddBlog(title, blogBody);

    setTitle("");
    setBlogBody("");
    navigate("/blogs");
  };
  return (
    <div className="blogApp-box">
      <h1>Blog App</h1>

      <form className="blogform" onSubmit={handleSubmit}>
        <label className="title-box">Title</label>
        <input
          className="inputbox"
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="title-box">Blog</label>
        <input
          className="inputbox1"
          type="text"
          name="blog"
          placeholder="your post ..."
          value={blogBody}
          onChange={(e) => setBlogBody(e.target.value)}
        />

        <button type="submit" className="post-btn">
          Post ⬆️
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
